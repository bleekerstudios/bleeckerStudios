import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"
import CTA from "@components/CallToAction"
import Button from '@components/Button/Button'
import { ButtonVariant } from '@components/Button/Button'
import MyComponent from '../components/insights'
import SoftwareCounter from '@components/softwareins'
import CallToAction from '@components/CallToAction'

const UseCases = () => {
    const pageTitle = `Services | ${process.env.siteTitle} `
    return (
        <div className="main-content-container wrap pt-10 ">
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
                <p>We&apos;ve segmented our services into a few catergories. We construct these services during the solution design & integation phase of our workflow. They are ultimately the tools you will leverage to improve operational efficency.</p>
                


                <div className="button-container  md:flex flex-wrap gap-4 ml-auto">
                <Button variant={ButtonVariant.primary} text="Get Started" link="/getStarted" icon="ph:arrow-right-bold"/> 

                

                </div>

               
                
           
                
              
            </SectionContent>



       

            

         

            
            <SectionHighlight 
                icon= 'lucide:settings'
                title="Deploy Tools & Streamline Your Workflows"
                content="Reduce employee overhead, manual processes, and workplace redundancies with low-cost automated solutions. Or, deploy tools to help your employees work faster, smarter, and happier."
                image="/images/redprogress.svg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />


                
           <SectionContent 
                title = "Expand Your Digital Footprint"
                icon= 'lucide:clapperboard'

                alignment = "center"
                hasBlockPadding = {true}
            >
                <p>Expand your market presence with our innovative marketing and exposure strategies. Our team is ready to boost your impact through tailored advertising, impactful design, strategic social media, and comprehensive marketing services. We specialize in refining your brand voice and developing a focused content strategy, all while streamlining processes through smart automation.</p>

                <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                <Button variant={ButtonVariant.primary} text="Get Started" link="/getStarted" />

                


                

               {/*  <a href="https://bleecker-studios-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Details</button>
    </a>  */}
                </div>
            </SectionContent>


            
            <SectionHighlight 
                title="Software Development"
                icon="lucide:code-2"
                content="Contruct a new iOS, Android, or Web based tools to boost operational efficency and save time. Have an idea for an app? We can build that too."
                image="/images/finaldarkdonut.svg"
                imageAlt="Lorem ipsum dolor sit"
            />

             <SectionContent 
                title = "Business Development"
                icon="lucide:bar-chart-big"

                alignment = "center"
                hasBlockPadding = {true}
            >
                <p>We&apos;re here to guide your growth. Our expertise has driven success across various domains, including procurement, conducting comprehensive tech stack audits, interactive workshops, detailed product roadmapping sessions, and designing robust software architecture. Understanding that each business has unique needs, we&apos;re eager to delve into yours and identify how our solutions can propel your expansion.</p>
                
                <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                <Button variant={ButtonVariant.primary} text="Schedule a Meeting" link="/getStarted" />


                {/* <a href="https://bleecker-studios-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Overview</button>
</a> */}
                </div>

            </SectionContent>
            <SectionHighlight 
                title="Professional Services & Technical Support"
                icon="lucide:help-circle"

                content="We aim to be your ultimate support partner in technology. Whether you need custom APIs to seamlessly integrate various applications across your technology ecosystem, or require responsive ad-hoc hardware and software support, we're here for you. Our team excels in breaking down complex technical concepts into easily understandable examples, ensuring you get the support you need and learn along the way."
                image="/images/purplewave2.svg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />

<section className="logos-container wrap wrap-px ">
<div className="logos-content-container p-2 md:p-5 rounded-2xl  bg-badge gap-y-2  py-5 ">
<div className="content-container text-black text-center mt-5">
<SoftwareCounter/>





    </div>
    </div>
    </section>


    <CallToAction/>
    

            
            <Logos
            />
            
        </div>
    )
}

export default UseCases