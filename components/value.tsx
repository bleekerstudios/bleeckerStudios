import FeatureContent from "@components/Feature/FeatureContent"

const DATA = [
    {
      title: 'Test 3',
      content: `Stop,drop,roll`,
      icon: 'ph:lightning',
      link: '/howwework',
      linkTitle: 'How We Work'
    },
    {
      title: 'Test2',
      content: `catchy phrase here`,
      icon: 'lucide:mouse-pointer',
      link: '/Services',
      linkTitle: 'Services'
    },
    {
      title: 'Test 1',
      content: `more catchy stuff`,
      icon: 'ph:lightning',
      link: '/getStarted',
      linkTitle: 'Get Started'
    }
  ]

const Value = () => {
    return (
        <section className="feature-container my-24 py-24 bg-badge rounded-2xl" >
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

export default Value