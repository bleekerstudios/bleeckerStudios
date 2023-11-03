import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"
import Stats from "./stats"
const DATA = [
  {
    title: 'Phase 1 | Evaluate Current State',
    content: `We'll learn about your organization's current state, identifying roadblocks, inefficiencies, and pain points along the way. Once aligned, we'll start ideating around your ideal state and create a plan on how to get there.`,
    image: '/images/gfunnel.svg',
    imageAltTag: 'highlight-1',
    icon: 'lucide:messages-square',
    link: '/getStarted',
    linkTitle: 'Learn More',
    reversed: false
  },
  
  
  
  
  
  
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
    {
      title: 'Phase 4 | Deploy & Educate',
      content: `Phase 3: Go Live. Once the solution is rolled out, we'll design a custom offboarding strategy. This will encompass a support portal, enablement resources, and additional guidance to efficiently ramp your team and guarantee a smooth transition + adoption.`,
      image: '/images/pssvg.svg',
      imageAltTag: 'highlight-3',
      icon: 'lucide:plane-takeoff',
      link: '/getStarted',
      linkTitle: 'Get Started',
      reversed: true
    }
  ]

const Highlight = () => {
    const alignment = "left"
    return (
        <section className="highlight-container my-3">
            <div className="highlight-content mb-10">
                
          
                
                <SectionContent 
                    title = "Building What You Need, Exactly How You Need It"
                    subheading = "Our Approach"
                    alignment = {alignment}
                    isBigHeader = {false}
                >
                  <p></p>
                  <p>Each phase of our workflow is intentionally designed. We start by listening to your needs, this lays the foundation. From here we can construct a solution specfically designed with your team in mind. The end goal is to deploy a solution that is adopted and adored across your entire organzition. </p>
                  

                </SectionContent>
                <ButtonGroup className = "wrap wrap-px" alignment={alignment} >
                    <Button variant={ButtonVariant.primary} text="Get Started" link="/getStarted" icon="ph:arrow-right-bold" />
                    <Button variant={ButtonVariant.secondary} text="Services" link="/Services" />
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

export default Highlight