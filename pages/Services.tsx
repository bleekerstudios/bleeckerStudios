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
import VerticalTabs from '@components/servicetabs'
import BasicTabs from '@components/servicetabs'

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
                <p>We construct these services during the solution design & integation phase of our workflow. Ultimately, these tools you will leverage to improve operational efficency.</p>


                <div className="button-container  md:flex flex-wrap gap-4 ml-auto">
                <Button variant={ButtonVariant.primary} text="Get Started" link="/getStarted" icon="ph:arrow-right-bold"/> 

                

                </div>

               
                
           
                
              
            </SectionContent>


                <BasicTabs/>
       

            

         

            
                <div className="flex flex-col md:flex-row px-6 bg-zinc-900	py-10 text-gray-200 rounded-2xl	shadow-2xl
">

<SectionContent
title = "Built For Enterprise Scale"
subheading = "Our Solutions"

alignment = "left"
isBigHeader = {true}>
    <p className="text-white">Apps, connectors, and strategies that are built for your current state and future state.</p>



    
    </SectionContent>

    <section className="logos-container wrap wrap-px  rounded-2xl 	">
<div className="logos-content-container p-2 md:p-5 rounded-2xl  bg-badge gap-y-2 px-6 py-16 ">
<div className="content-container text-black text-center mt-5 rounded-2xl ">
<SoftwareCounter/>



    </div>
    </div>
    </section>

    </div>


            
           





    

    <CallToAction/>
    

            
            <Logos
            />
            
        </div>
    )
}

export default UseCases