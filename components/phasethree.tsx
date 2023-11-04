import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"
const DATA = [
 
  
  
  
  
  
  
    {
      title: 'Phase 3 | Develop + Integrate',
      content: `Build. Iterate. Integrate. In Phase 3, we focus on materializing your solution. We'll actively seek feedback and ensure close collaboration throughout this implementation stage.`,
      image: '/images/greenprogress.svg',
      imageAltTag: 'highlight-2',
      icon: 'lucide:wrench',
      link: '/Services',
      linkTitle: 'Overview',
      reversed: false
    },
    
  ]

const PhaseThree = () => {
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

export default PhaseThree