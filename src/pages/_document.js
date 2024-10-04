import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  
  render() {
    return (
      <Html style={{backgroundColor: "#000D41"}} lang="en">
        <Head>
          <meta name="theme-color" content="#000D41" />
          <link rel="preload" href="https://fonts.googleapis.com"/>
          <link rel="preload" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
          <link rel="preload" href="https://fonts.googleapis.com"/>
          <link rel="preload" href="https://fonts.gstatic.com" crossorigin/>
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet"/>
        </Head>
        <body style={{backgroundColor: "#000D41"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
