import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useCategory } from './api/useCategory';
import { useFAQ } from './api/useFAQ';
import { CATEGORY_ITEMS_ITEM_KEYS, CONSULT_TABS_ITEM_KEYS, USAGE_TABS_ITEM_KEYS } from './common/constants';
import { AppDownload } from './components/AppDownload';
import { FAQTabs } from './components/faq/FAQTabs';
import { Footer } from './components/footer/Footer';
import { Guide } from './components/Guide';
import { Header } from './components/header/Header';
import { Heading } from './components/Heading';
import { Inquiry } from './components/Inquiry';
import { Main } from './components/Main';
import { SearchBar } from './components/SearchBar';
import { SearchInfo } from './components/SearchInfo';
import { ServiceTab } from './components/ServiceTab';
import { GlobalStyle } from './styles/style';
import { theme } from './styles/theme';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const finishSubmitting = () => setIsSubmitting(false);
  const [submittedQuestion, setSubmittedQuestion] = useState('');

  const [categoryTab, setCategoryTab] = useState<CATEGORY_ITEMS_ITEM_KEYS>('CONSULT');
  const handleTabClick = (key: CATEGORY_ITEMS_ITEM_KEYS) => {
    setCategoryTab(key);
    setIsSubmitting(true);
  };
  const { data: categoryData } = useCategory(categoryTab);

  const [faqTab, setFaqTab] = useState<CONSULT_TABS_ITEM_KEYS | USAGE_TABS_ITEM_KEYS>('all');
  const handleFaqTabClick = (key: CONSULT_TABS_ITEM_KEYS | USAGE_TABS_ITEM_KEYS) => {
    setFaqTab(key);
    setIsSubmitting(true);
  };

  const [question, setQuestion] = useState('');
  const {
    data: faqData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useFAQ({
    tab: categoryTab,
    question,
    faqCategoryID: faqTab,
    isSubmitting,
  });

  const handleSubmitQuestion = () => {
    if (question.trim().length < 2) {
      alert('검색어는 2글자 이상 입력해주세요.');
      return;
    }
    setIsSubmitting(true);
    setSubmittedQuestion(question);
  };
  const handleChangeQuestion = (value: string) => {
    setQuestion(value);
  };
  const handleInputClear = () => {
    setQuestion('');
  };

  const handleReset = () => {
    handleInputClear();
    setSubmittedQuestion('');
    setFaqTab('all');
    refetch();
  };

  useEffect(() => {
    if (!isLoading && isSubmitting) {
      finishSubmitting();
    }
  }, [isLoading, isSubmitting]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>
        <Heading />
        <ServiceTab currentTab={categoryTab} onTabClick={handleTabClick} />
        <SearchBar
          onClear={handleInputClear}
          onChange={handleChangeQuestion}
          question={question}
          onSubmit={handleSubmitQuestion}
        />
        {submittedQuestion && (
          <SearchInfo totalCount={faqData?.pages.flatMap((page) => page.items).length ?? 0} onReset={handleReset} />
        )}
        {categoryData && (
          <FAQTabs
            category={categoryTab}
            categoryData={categoryData}
            data={faqData?.pages.flatMap((page) => page.items) ?? []}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isLoading={isLoading}
            onTabClick={handleFaqTabClick}
          />
        )}
        <Inquiry />
        <Guide />
        <AppDownload />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
