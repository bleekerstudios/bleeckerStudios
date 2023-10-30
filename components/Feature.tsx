import FeatureContent from "@components/Feature/FeatureContent"

const DATA = [
    {
      title: 'Solution Design',
      content: `We'll work with you to define your organization's ideal state, identifying roadblocks, inefficiencies, and pain points along the way. Once aligned, we'll start architecting a solution that's uniquely suited to your needs.`,
      icon: 'ph:lightning',
      link: '/contact',
      linkTitle: 'Contact'
    },
    {
      title: 'Develop + Integrate',
      content: `We personally oversee the entire project lifecycle, from inception and development to the final stage of deployment. This ensures your solution is held to our standard of intentional design, attention to detail, and timely delivery.`,
      icon: 'lucide:mouse-pointer',
      link: '/Services',
      linkTitle: 'Services'
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
        <section className="feature-container my-24 py-24 bg-badge rounded-2xl">
            <div className="feature-content wrap wrap-px">
                <div className="feature-content-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 gap-8">
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