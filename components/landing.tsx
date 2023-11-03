import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"


const DATA = [
  
  
  
  
    {
      title: 'Build Your Tech Ecosystem',
      content: `We want to hear about your problems and areas you want to improve. From there we'll design and deploy solutions that will save you time, reduce costs, and increase efficency.`,
      image: '/images/teald.svg',
      imageAltTag: 'highlight-2',
      icon: 'lucide:wrench',
      link: '/howwework',
      linkTitle: 'How We Work',
      reversed: false
    },
    {
      title: 'Browse our Common Services',
      content: `We have a detailed repository of out of the box services that have made an impact across many enterprises`,
      image: '/images/ptube.svg',
      imageAltTag: 'highlight-3',
      icon: 'lucide:plane-takeoff',
      link: '/getStarted',
      linkTitle: 'Get Started',
      reversed: true


    },
    {
      title: 'Just Need an Integration?',
      content: `Lets connect. We can spin something up in the matter of hours.`,
      image: '/images/redtop.svg',
      imageAltTag: 'highlight-3',
      icon: 'lucide:plane-takeoff',
      link: '/getStarted',
      linkTitle: 'Get Started',
      reversed: false
    }
  ]

const Landing = () => {
    const alignment = "left"
    return (
        <section className="highlight-container my-16">
            <div className="highlight-content mb-16">
                
          
                
                <SectionContent 
                    title = "We Work at Your Pace"
                    subheading = "Our Focus"
                    alignment = {alignment}
                    isBigHeader = {false}
                >
                  <p></p>
                  <p>We help partners with a variety of needs, Details Below.</p>
                  

                </SectionContent>
                <ButtonGroup className = "wrap wrap-px" alignment={alignment} >
                    <Button variant={ButtonVariant.primary} text="How We Work" link="/howwework" icon="ph:arrow-right-bold" />
                    <Button variant={ButtonVariant.secondary} text="Learn More" link="/getStarted" />
                </ButtonGroup>
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

export default Landing