import FeatureContent from "@components/Feature/FeatureContent"

const DATA = [
    {
      title: 'Solution Design',
      content: `We'll identify your organization's roadblocks and challenges, then architect a solution uniquely suited for you.`,
      icon: 'ph:lightning',
      link: '/howwework',
      linkTitle: 'How We Work'
    },
    {
      title: 'Develop + Integrate',
      content: `We personally oversee the entire project lifecycle, from inception and development to the final stage of deployment.`,
      icon: 'lucide:mouse-pointer',
      link: '/Services',
      linkTitle: 'Services'
    },
    {
      title: 'Deploy & Educate',
      content: `Following deployment, we will construct a tailored enablement plan to ensure that your team understands the new solution and is positioned for success.`,
      icon: 'ph:lightning',
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