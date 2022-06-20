import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { createGlobalStyle } from 'styled-components';
import useHydration from '../hooks/useHydration';
import Pre from '../component/Pre';
import Navbar from '../component/navbar';
import Header from '../component/header';

function MyApp({ Component, pageProps }) {
  const hydrated = useHydration();
  if (hydrated === false) {
    return;
    <></>;
  }

  return (
    <>
      <GlobalStyle />
      <Header />
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

  h2 {
    margin: 20px;
  }
  `;
