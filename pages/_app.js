import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from 'next/router';
import blogStyles from "../styles/blogStyles.css";
import normalize from '../styles/normalize.css';
import nprogressCSS from '../styles/nprogress.css';
import NProgress from 'nprogress';

const GlobalStyle = createGlobalStyle`
${blogStyles}
${normalize}
${nprogressCSS}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    h1,h2,h3 {
      font-family: 'Playfair Display', serif;
    }
    
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

// NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
