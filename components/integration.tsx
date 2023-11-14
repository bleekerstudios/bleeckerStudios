import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"
import MyComponent from "./insights"

const DATA = [
  
  
  
  
   
    {
      title: 'Just Need An Integration?',
      content: `Lets connect. We can spin something up in the matter of hours.`,
      image: '/images/redtop.svg',
      imageAltTag: 'highlight-3',
      icon: 'lucide:braces',
      link: '/getStarted',
      linkTitle: 'Get Started',
      reversed: false
    }
  ]

const Integration = () => {
    const alignment = "left"
    return (
        <section className="mt-16 ">
            <div className="highlight-content ">
                
          
               
                  
                  

               {/*} <ButtonGroup className = "wrap wrap-px" alignment={alignment} >
                    <Button variant={ButtonVariant.primary} text="How We Work" link="/howwework" icon="ph:arrow-right-bold" />
                    <Button variant={ButtonVariant.secondary} text="Learn More" link="/getStarted" />
    </ButtonGroup> */}
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

export default Integration