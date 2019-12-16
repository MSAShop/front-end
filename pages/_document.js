import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  
  render() {
    return (
      <html lang='en' dir='ltr'>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Playball&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const styledComponentsSheet = new ServerStyleSheet();
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          materialSheets.collect(styledComponentsSheet.collectStyles(<App {...props} />))
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,

      styles: (
        <>
          {initialProps.styles}
          {materialSheets.getStyleElement()}
          {styledComponentsSheet.getStyleElement()}
        </>
      )
    };
  } finally {
    styledComponentsSheet.seal();
  }
};
