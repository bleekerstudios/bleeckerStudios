import Layout from '@components/Layout'
import SEO from '@components/SEO'
import '@styles/scss/global.scss'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SEO 
        title ={process.env.siteTitle}
      />
      <Component {...pageProps} />
      <Analytics />

    </Layout>
  )
}

export default MyApp
