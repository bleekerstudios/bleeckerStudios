import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"
import MyComponent from "./insights"

const DATA = [
  
  
  
  
    
    {
      title: 'Browse Our Common Services',
      content: `Our suite of out-of-the-box services has driven efficiency and cost savings across a range of enterprises`,
      image: '/images/ptube.svg',
      imageAltTag: 'highlight-3',
      icon: 'lucide:folder-search',
      link: '/Services',
      linkTitle: 'Services',
      reversed: true


    },
    
  ]

const BrowseServices = () => {
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

export default BrowseServices