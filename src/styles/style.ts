import { createGlobalStyle } from 'styled-components';

import { fontFamily } from './fontFamily';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${fontFamily};
  body {
    font-family: 'Kia Signature Fix', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
