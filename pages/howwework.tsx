import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"
import Feature from '@components/Feature'
import Highlight from '@components/Highlight'
import CallToAction from '@components/CallToAction'

const Company = () => {
    const pageTitle = `Company | ${process.env.siteTitle} | Pathway`
    return (
        <div className="main-content-container wrap">
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
                <p>At Bleecker Studios, we&apos;re committed to a partnership-based approach. From inception to deployment, collaboration is key. We&apos;re here to ask the right questions and deeply understand your needs. Our agility & component based architecture allows us to adapt to changing priorities and visions, ensuring we stay closely aligned with your objectives throughout the project lifecycle. We&apos;re prepared to iterate as needed.</p>
            </SectionContent>
           
                    <section className="logos-container wrap wrap-px">
            <div className="logos-content-container p-2 md:p-5 rounded-2xl my-24 bg-badge gap-y-2">
                <div className="content-container text-black text-center">
                    <Feature />


                </div>
               
            </div>
        </section>
        <SectionImage 
                className="my-24"
                src="/images/Hero3.jpg"
                alt="Company Page Hero"
            />
                    <Highlight />


            <CallToAction/>
          
            
            <SectionImage 
                className="my-24"
                src="/images/Hero5.jpg"
                alt="Company Page Hero"
            />
           
            <Logos
            />
        </div>
    )
}

export default Company