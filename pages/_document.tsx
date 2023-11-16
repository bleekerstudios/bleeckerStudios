import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Analytics />


        </body>
      </Html>
    )
  }
}

export default MyDocument