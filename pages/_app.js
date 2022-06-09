import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { createGlobalStyle } from 'styled-components';
import useHydration from '../hooks/useHydration';
import Pre from '../component/Pre';

function MyApp({ Component, pageProps }) {
  const hydrated = useHydration();
  if (hydrated === false) {
    return;
    <></>;
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
      <Pre />
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }`;
