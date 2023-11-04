import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"
const DATA = [

  
  
  
  
  
  
 
    {
      title: 'Deploy & Educate',
      content: `We're Live! Once the solution is rolled out, we'll design an offboarding strategy that will encompass a suite of enablement resources to ramp your team and guarantee a smooth transition + adoption.`,
      image: '/images/pssvg.svg',
      imageAltTag: 'highlight-3',
      icon: 'lucide:plane-takeoff',
      link: '/getStarted',
      linkTitle: 'Get Started',
      reversed: true
    }
  ]

const PhaseFour = () => {
    const alignment = "left"
    return (
        <section className="highlight-container ">
         
            <div className="highlight-image-container">
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
        </section>
    )
}

export default PhaseFour