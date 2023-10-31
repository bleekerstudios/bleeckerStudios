import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import GettingStartedForm from '@components/GettingStartedForm'
import ButtonGroup from '@components/ButtonGroup'
import Button, { ButtonVariant } from "@components/Button/Button"





const Company = () => {
    const pageTitle = `Get Started | ${process.env.siteTitle} `
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            
            <SectionContent 
                title = "Getting Started"
                alignment = "center"
                hasBlockPadding = {true}
                
            
            >
                <p>We have a few different ways to begin. You can give us a call, email us, or send us your info below and we&apos;ll reach out.</p>
                
        
     <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                <ButtonGroup className = "wrap wrap-px" >
                    <Button variant={ButtonVariant.secondary} text="Contact" link="/contact" />
                </ButtonGroup>

                </div>

                   
                   
                    
                
                </SectionContent>
            

            <GettingStartedForm/>
            <SectionImage 
                className="my-24"
                src="/images/brownweb.svg"
                alt="Company Page Hero"
            />
            
            
           
            
            <Logos
            />

        </div>
    )
}

export default Company