import { css, TinCaseProvider } from '@tincase/provider';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Layout } from '../components';

/* globalStyles: Define custom global styles here */
const globalStyles = css`
  #__next {
    height: 100%;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <TinCaseProvider global={globalStyles}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </TinCaseProvider>
);

export default appWithTranslation(MyApp);
/* appWithTranslation: This HOC provides the i18nextProvider */
