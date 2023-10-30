import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"
import CTA from "@components/CallToAction"

const UseCases = () => {
    const pageTitle = `Use Cases | ${process.env.siteTitle} | Pathway`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            <SectionContent 
                title = "Services"
                alignment = "left"
                hasBlockPadding = {true}
                icon="lucide:package"

            >
                <p>At Bleeker Studios, we pride ourselves on creating custom solutions that tackle real-world challenges faced by our partners. Below are some services that showcase how we can improve operational efficiency, reduce costs, and enhance user experiences:</p>

                <p>Check out our service overview below, or broswe our detailed list of use cases</p>

                <div className="button-container  md:flex flex-wrap gap-4 ml-auto">

                <a href="https://bleeker-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Use Cases</button>
                </a>
                </div>


              
            </SectionContent>
            
            <SectionHighlight 
                icon= 'lucide:settings'
                title="Deploy Tools & Streamline Your Workflows"
                content="Reduce employee overhead, manual processes, and workplace redundancies with low-cost automated solutions. Or, deploy solutions to help your employees work faster, smarter, and happier."
                image="/images/Hero5.jpg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />

            

                
           <SectionContent 
                title = "Expand Your Digital Footprint"
                icon= 'lucide:clapperboard'

                alignment = "center"
                hasBlockPadding = {true}
            >
                <p>Bleecker Studios aims to simplify technology implementations. Our ethos is straightforward: Learn, build, and deploy. We streamline the journey from concept to realization, making collaboration effortless. Excited for the opportunity to partner with you.</p>

                <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                <a href="https://bleeker-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Details</button>
                </a>
                </div>
            </SectionContent>


            
            <SectionHighlight 
                title="Software Development"
                icon="lucide:code-2"
                content="Deliever best in class content that appeals to the masses"
                image="/images/highlight-2.jpg"
                imageAlt="Lorem ipsum dolor sit"
            />
             <SectionContent 
                title = "Business Development"
                icon="lucide:bar-chart-big"

                alignment = "center"
                hasBlockPadding = {true}
            >
                <p>Bleecker Studios aims to simplify technology implementations. Our ethos is straightforward: Learn, build, and deploy. We streamline the journey from concept to realization, making collaboration effortless. Excited for the opportunity to partner with you.</p>
                
                <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                <a href="https://bleeker-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Overview</button>
                </a>
                </div>

            </SectionContent>
            <SectionHighlight 
                title="Professional Services & Technical Support"
                icon="lucide:help-circle"

                content="We'll work with you to design an application that will scale as your business grows"
                image="/images/highlight-3.jpg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />
            <CTA />
            <Logos
            />
        </div>
    )
}

export default UseCases