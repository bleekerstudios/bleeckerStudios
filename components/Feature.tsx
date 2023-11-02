import FeatureContent from "@components/Feature/FeatureContent"

const DATA = [
    {
        title: 'Evaluate Current State',
        content: `We'll learn about your organization's current state, identifying roadblocks, inefficiencies, and pain points along the way. Once aligned, we'll start ideating around your ideal state and create a plan on how to get there.`,
        icon: 'lucide:messages-square',
      },
    
    {
      title: 'Solution Design',
      content: `Once we've defined your end state we'll begin architecting a solution that's uniquely suited to your needs.`,
      icon: 'ph:lightning',
      
    },
    {
      title: 'Develop + Integrate',
      content: `We personally facilitate the entire project lifecycle, from inception and development to the final stage of deployment. This ensures your solution is held to our standard of intentional design, attention to detail, and timely delivery.`,
      icon: 'lucide:mouse-pointer',
      
    },
    {
      title: 'Deploy & Educate',
      content: `Following deployment, we will construct a tailored enablement plan to ensure that your team adopts the new solution and is positioned for long-term success. Our goal is not just to implement a solution, but to provide tangible business impact, such as enhancing productivity, reducing costs, solving problems, and driving innovation.`,
      icon: 'lucide:bar-chart-4',
      link: '/getStarted',
      linkTitle: 'Get Started'
    }
  ]

const Feature = () => {
    return (
        <section className="feature-container my-1 py-16 bg-badge rounded-2xl">
            <div className="feature-content wrap wrap-px">
                <div className="feature-content-container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 gap-8">
                        {
                            DATA.map( (item, index) => (
                                <FeatureContent 
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    link={item.link}
                                    linkTitle={item.linkTitle}
                                    icon={item.icon}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature