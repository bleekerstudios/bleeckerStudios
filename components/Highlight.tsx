import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"

const DATA = [
  {
    title: 'Phase 1 | Evaluate Current State',
    content: `We'll learn about your organization's current state, identifying roadblocks, inefficiencies, and pain points along the way. Once aligned, we'll start ideating around your ideal state and create a plan on how to get there.`,
    image: '/images/yglobe.svg',
    imageAltTag: 'highlight-1',
    icon: 'lucide:messages-square',
    link: '/getStarted',
    linkTitle: 'Learn More',
    reversed: false
  },
  
  
  
  
  
  
  {
      title: 'Phase 2 | Solution Design',
      content: `Working sessions, deep discovery, and understanding your organizations' challenges.
      In this phase we'll work to identify opportunities for improvement and design a solution that fits your needs`,
      image: '/images/thicktube.svg',
      imageAltTag: 'highlight-1',
      icon: 'ph:lightbulb',
      link: '/Services',
      linkTitle: 'Services',
      reversed: true
    },
    {
      title: 'Phase 2 | Develop + Integrate',
      content: `Build. Iterate. Integrate. In Phase 2, we focus on materializing your solution. We'll actively seek feedback and ensure close collaboration throughout this implementation stage.`,
      image: '/images/greenprogress.svg',
      imageAltTag: 'highlight-2',
      icon: 'lucide:wrench',
      link: '/Services',
      linkTitle: 'Overview',
      reversed: false
    },
    {
      title: 'Phase 3 | Deploy & Educate',
      content: `Phase 3: Launch! Once the solution is rolled out, we'll design a custom offboarding strategy. This will encompass a support portal, enablement resources, and additional guidance to efficiently ramp your team and guarantee a smooth transition and adoption`,
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
        <section className="highlight-container my-16">
            <div className="highlight-content mb-16">
                <SectionContent 
                    title = "Building What You Need, Exactly How You Need It"
                    subheading = "Our Approach"
                    alignment = {alignment}
                    isBigHeader = {false}
                >
                  <p></p>
                  <p>Our workflow is segmented into four phases. See the breakdown below.</p>
                </SectionContent>
                <ButtonGroup className = "wrap wrap-px" alignment={alignment} >
                    <Button variant={ButtonVariant.primary} text="Services" link="/Services" icon="ph:arrow-right-bold" />
                    <Button variant={ButtonVariant.secondary} text="Contact" link="/getStarted" />
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