import { createGlobalStyle } from 'styled-components';
import useHydration from '../hooks/useHydration';
import { useEffect } from 'react';
import Navbar from '../component/navbar';
import Header from '../component/header';
import useStore from '../hooks/useStore';

function MyApp({ Component, pageProps }) {
  const hydrated = useHydration();
  const fetchApi = useStore(state => state.fetchApi);
  useEffect(() => {
    fetchApi(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`
    );
  }, [fetchApi]);

  if (hydrated === false) {
    return null;
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`



a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}



  body {
    margin: 0px 0px 70px 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h2 {
    margin: 20px;
  }
  `;
