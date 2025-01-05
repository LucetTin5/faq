import styled from 'styled-components';

interface SearchBarProps {
  question?: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onSubmit: () => void;
}

export const SearchBar = ({ question, onChange, onClear, onSubmit }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const handleClear = () => {
    onChange('');
    onClear();
  };
  const handleSubmit = () => {
    onSubmit();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };
  return (
    <SearchBarWrapper>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="찾으시는 내용을 입력해주세요"
          value={question}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {question && question.length > 0 && <ClearButton type="button" onClick={handleClear} />}
        <SearchButton type="submit" onClick={handleSubmit} />
      </InputWrapper>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.gray10};
  margin-bottom: 24px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 480px;
  padding: 0 80px 0 18px;
  height: 56px;
  margin: 0 auto;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SearchInput = styled.input`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
  &:focus {
    outline: none;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  width: 40px;
  height: 100%;
  right: 56px;
  background-image: url('/ic_clear.svg');
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  width: 56px;
  height: 100%;
  right: 0;
  background-image: url('/ic_search.svg');
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: center;
`;
