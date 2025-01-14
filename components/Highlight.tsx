import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"
const DATA = [
  {
    title: 'Evaluate Current State',
    content: `We'll learn about your organization's current state, identifying roadblocks and opportunities for improvement.`,
    image: '/images/purpletub3.svg',
    imageAltTag: 'highlight-1',
    icon: 'lucide:messages-square',
    link: '/getStarted',
    linkTitle: 'Learn More',
    reversed: false
  },
  
  
  
  
  
  

  ]

const Highlight = () => {
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

export default Highlight