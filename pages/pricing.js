import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import ButtonGroup from '@components/ButtonGroup'

const Pricing = () => {
    const pageTitle = `Pricing | ${process.env.siteTitle} | Pathway`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            <div className="content-container my-24">
                <SectionContent 
                    title = "Pricing"
                    content = "Fusce ac nulla non urna posuere malesuada eget id ipsum. Praesent vitae sem nisl. Donec in est ut odio sagittis dapibus in commodo mi."
                    alignment = "left"
                />
                <ButtonGroup 
                    wrap = "wrap-sm wrap-px"
                    hasPrimary = {true}
                    primaryText = "See Prices"
                    primaryLink = "#prices"
                    primaryIcon = "ph:arrow-right-bold"
                    alignment="left"
                />
            </div>
            <SectionImage 
                classes="my-24"
                src="/images/Hero5.jpg"
                alt="Pricing Page Hero"
            />
            <Logos />
        </div>
    )
}

export default Pricing