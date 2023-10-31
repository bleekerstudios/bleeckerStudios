import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import ButtonGroup from '@components/ButtonGroup'
import Button, {ButtonVariant} from '@components/Button/Button'
import LogoContainer from '@components/Logos/LogoContainer'
import LogoItems from '@components/Logos/LogoItems'

const Contact = () => {
    const pageTitle = `Contact | ${process.env.siteTitle} `
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            <div className="content-container my-6 sm:my-24">
                <SectionContent title = "Contact Us" alignment = "left">
                    <p>Looking forward to working with you</p>
                </SectionContent>

                <section className="logos-container wrap wrap-px">
            <div className="logos-content-container p-8 md:p-16 rounded-2xl my-24 bg-badge gap-y-8">
                <div className="content-container text-black text-left">
                    <p>Email</p>
                    <h6>info@bleeker-studios.com</h6>
                    <p>Phone</p>
                    <h5>(917)-232-7121</h5>

                </div>
                <LogoContainer>
                    
                </LogoContainer>
            </div>
        </section>



            </div>

            <SectionImage 
                className="my-24"
                src="/images/orangev.svg"
                alt="Pricing Page Hero"
            />
            <Logos />
        </div>
    )
}

export default Contact