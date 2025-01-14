import Head from "next/head"

type SEOProps = {
    title?: string
    description?: string
    keywords?: string
}

const SEO = ({title, description, keywords }: SEOProps) => {
    // Cuztomize Meta Properties
    // Can create extra props and pass as arguments like title in case you want to change for each page.
    const metaDescription = description ? description : process.env.siteDescription
    const metaKeywords = keywords ? keywords : process.env.siteKeywords 
    const siteURL = process.env.siteURL
    const twitterHandle = process.env.twitterHandle
    const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            {/* { Twitter } */}
            <meta name="twitte:card" content="summary_large_image" key="twcard" />
            <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

            {/* {Open Graph} */}
            <meta property="og:url" content={siteURL} key="ogurl" />
            <meta property="og:image" content={imagePreview} key="ogimage" />
            <meta property="og:site_name" content={siteURL} key="ogsitename" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={metaDescription} key="ogdesc" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="" />
            <link rel="manifest" href="/site.webmanifest" />
            {/* Title */}
            <title>{title}</title>
        </Head>
    )

}

export default SEO