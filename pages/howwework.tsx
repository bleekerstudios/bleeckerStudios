import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"
import Feature from '@components/Feature'
import Highlight from '@components/Highlight'
import CallToAction from '@components/CallToAction'
import PhaseTabs from '@components/phasetabs'
import Button from '@components/Button/Button'
import { ButtonVariant } from '@components/Button/Button'
import ButtonGroup from '@components/ButtonGroup'

const Company = () => {
    const pageTitle = `How We Work | ${process.env.siteTitle}`
    return (
        <div className="main-content-container wrap pt-10">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            <SectionContent 
                title = "How We Work"
                alignment = "left"
                hasBlockPadding = {true}
                icon="lucide:truck"

            >
                <p>Our process is segmented out into four phases, we believe each phase plays a critical role in developing a solution designed for your needs.</p>
               
            </SectionContent>
            <SectionImage 
                className="my-5"
                src="/images/pinknet.svg"
                alt="Company Page Hero"
            />
           
                {/* }    <section className="logos-container wrap wrap-px">
            <div className="logos-content-container p-2 md:p-5 rounded-2xl my-24 bg-badge gap-y-2">
                <div className="content-container text-black text-center">


                </div>
               
            </div>
    </section> */}

<div className="highlight-content mb-10">
                
          
                
                <SectionContent 
                    title = "Building What You Need, Exactly How You Need It"
                    subheading = "Our Approach"
                    alignment = "left"
                    isBigHeader = {false}
                >
                  <br></br>
                  

                </SectionContent>
                <ButtonGroup className = "wrap wrap-px"  >
                    <Button variant={ButtonVariant.primary} text="Get Started" link="/getStarted" icon="ph:arrow-right-bold" />
                </ButtonGroup>
            </div>
        
                    <PhaseTabs />


          
            
            <SectionImage 
                className="my-24"
                src="/images/burgwave.svg"
                alt="Company Page Hero"
            />
            <CallToAction/>
           
            <Logos/>
        </div>



    )
}

export default Company