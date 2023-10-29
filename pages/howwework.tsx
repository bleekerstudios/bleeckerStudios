import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"
import CTA from "@components/CallToAction"
import Feature from '@components/Feature'
import Highlight from '@components/Highlight'

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
            >
                <p>Our approach is built on a framework that prioritizes active engagement with our partners, component based architecture, and intentonal design.</p>
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


            <SectionContent 
                title = "Technology is a tool. When built correclty, it can help people accomplish amazing things"
                alignment = "center"
                hasBlockPadding = {true}
                subheading = '“Technology not does inheriently make our lives easier. It is the adoption of technology by humans that makes our lives easier.”'
            >
                <p></p>
                <p></p>
            </SectionContent>
          
            
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