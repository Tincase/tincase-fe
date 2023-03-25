import { TinCaseProvider } from '@tincase/provider';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Layout } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <TinCaseProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </TinCaseProvider>
);

export default appWithTranslation(MyApp);
// appWithTranslation : i18nextProvider를 제공하는 HOC입니다.
