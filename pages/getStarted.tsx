import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import GettingStartedForm from '@components/GettingStartedForm'
import ButtonGroup from '@components/ButtonGroup'
import Button, { ButtonVariant } from "@components/Button/Button"
import LogoContainer from '@components/Logos/LogoContainer'




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
                <p>We have a few different ways to begin. You can send us your info below, shoot us an email, or give us a call. Looking forward to connecting</p>
                
        
     <div className="button-container  md:flex flex-wrap ml-auto justify-center">

                <ButtonGroup className = "wrap wrap-px" >
                    <Button variant={ButtonVariant.primary} text="Services" link="/Services" />
                </ButtonGroup>

                <ButtonGroup className = "wrap wrap-px" >
                    <Button variant={ButtonVariant.primary} text="How We Work" link="/Services" />
                </ButtonGroup>

                </div>

                   
                   
                    
                
                </SectionContent>
            

            <GettingStartedForm/>
            
            <section className="logos-container wrap wrap-px ">
            <div className="logos-content-container p-5 md:p-10 rounded-2xl my-10 bg-badge gap-y-8 flex ">
                <div className="content-container text-black">
                    <h6>Email</h6>
                    <h6>info@bleecker-studios.com</h6>
                    <br></br>
                    <h6>Phone</h6>
                    <h5>(917)-232-7121</h5>

                </div>
                <LogoContainer>
                    
                </LogoContainer>
            </div>
        </section>
            
            
            
            
            
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