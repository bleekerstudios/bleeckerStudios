import FeatureContent from "@components/Feature/FeatureContent"

const DATA = [
    {
      title: 'Active Listening',
      content: `Active listening is a critical component of our practice. It lays the ground work, based on what we learn we can create, build, and succeeed in our partnerships`,
      icon: 'lucide:ear',
      link: '/howwework',
      linkTitle: 'How We Work'
    },
    {
      title: 'Understanding Why',
      content: `Delving deep to understand the 'why' behind every challenge is crucial for our success. We prioritize grasping the core reasons and motivations driving the projects and goals of our clients. This depth of understanding allows us to create solutions that are not just effective but also empathetically aligned with our clients' objectives and the needs of their audiences.`,
      icon: 'lucide:ear',
      link: '/Services',
      linkTitle: 'Services'
    },
    {
      title: 'Evading "Paralysis Through Analysis"',
      content: `While we value thorough analysis and informed decision-making, we also recognize the trap of over-analysis — where opportunities can be lost in the mire of indecision. Our team strives to strike the right balance between thoughtful deliberation and timely action. We firmly believe you need to put one foot in front of the other and we focus on making decisions that keep projects moving forward, ensuring efficiency and momentum.`,
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