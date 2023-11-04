import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"
const DATA = [
 
  
  
  
  
  
  {
      title: 'Phase 2 | Solution Design',
      content: `Once we've defined your end state we'll begin architecting a solution that's uniquely suited to your needs.`,
      image: '/images/thicktube.svg',
      imageAltTag: 'highlight-1',
      icon: 'ph:lightbulb',
      link: '/Services',
      linkTitle: 'Services',
      reversed: true
    },
   
  ]

const PhaseTwo = () => {
    const alignment = "left"
    return (
        <section className="highlight-container ">
            <div className="highlight-content ">
                
          
                
              
            </div>
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

export default PhaseTwo