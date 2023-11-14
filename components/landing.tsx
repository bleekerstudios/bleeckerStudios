import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"
import MyComponent from "./insights"
import Integration from "./integration"
import BrowseServices from "./browseServices"

const DATA = [
  
  
  
  
    {
      title: 'Explore How We Work',
      content: `We want to hear about your problems and areas you want to improve. From there we'll design and deploy solutions that will save you time, reduce costs, and increase efficency.`,
      image: '/images/teald.svg',
      imageAltTag: 'highlight-2',
      icon: 'lucide:boxes',
      link: '/howwework',
      linkTitle: 'How We Work',
      reversed: false
    }
  ]

const Landing = () => {
    const alignment = "left"
    return (
        <section className="highlight-container	">
            <div className="highlight-content pt-5 ">
                
          
                
                <SectionContent 
                    title = "Technical Services, At Your Pace"
                    subheading = "What We Do"
                    icon = "lucide:layers-2"
                    alignment = {alignment}
                    isBigHeader = {false}
                >
                  <p></p>
                  <p> Bleecker Studios provides technical services that create lasting value for businesses and users. Our approach is flexible, we can either modify one, or many components of your technology ecosystem.</p>
                  

                </SectionContent>
               {/*} <ButtonGroup className = "wrap wrap-px" alignment={alignment} >
                    <Button variant={ButtonVariant.primary} text="How We Work" link="/howwework" icon="ph:arrow-right-bold" />
                    <Button variant={ButtonVariant.secondary} text="Learn More" link="/getStarted" />
    </ButtonGroup> */}
            </div>
            <div className="highlight-image-container mb-5 ">
                {
                  DATA.map( (item, index)=> (
                    <SectionHighlight 
                        key = { index }
                        title = { item.title }
                        content = { item.content }
                        image = { item.image }
                        imageAlt = { item.imageAltTag }
                        linkTitle = { item.linkTitle }
                        link = { item.link }
                        icon = { item.icon }
                        isReversed = { item.reversed }
                    />
                  ))
                }
            </div>

            <div className="flex flex-col md:flex-row px-6 bg-zinc-900	py-10 text-gray-200 rounded-2xl	shadow-2xl	">

<SectionContent
title = "Impact, Just Weeks After Deployment"
subheading = "Our Results"

alignment = "left"
isBigHeader = {true}>
    <p className="text-white">We focus on implementing solutions that deliever tangible business outcomes.</p>



    
    </SectionContent>

    <section className="logos-container wrap wrap-px 	">
<div className="logos-content-container p-2 md:p-5 rounded-2xl  bg-badge gap-y-2 px-6 py-16 shadow-2xl  ">
<div className="content-container text-black text-center mt-5 ">
<MyComponent/>



    </div>
    </div>
    </section>

    </div>


    <BrowseServices />

    <Integration />








        </section>
    )
}

export default Landing