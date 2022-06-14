import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { createGlobalStyle } from 'styled-components';
import useHydration from '../hooks/useHydration';
import Pre from '../component/Pre';
import Navbar from '../component/navbar';

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
      <Navbar />
      {/*<Pre />*/}
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px 0px 70px 0;
    padding: 0;
  }
  `;
