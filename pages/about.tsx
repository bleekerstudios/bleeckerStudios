import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import Value from '@components/value'

const About = () => {
    const pageTitle = `About | ${process.env.siteTitle} | Pathway`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />

<SectionContent 
                title = "About"
                alignment = "left"
                hasBlockPadding = {true}
                icon="lucide:book-open"

            >
                <p>Bleecker Studios aims to simplify technology implementations. Our ethos is straightforward: Learn, build, and deploy. We streamline the journey from concept to realization, making collaboration effortless. Excited for the opportunity to partner with you.</p>
            </SectionContent>



<SectionImage 
                className="my-24"
                src="/images/Hero2.jpg"
                alt="About Page Hero"
            />
           

            <Logos/>

            <SectionContent 
                title = "Values That Guide Us"
                icon="lucide:helping-hand"

                alignment = "center"
                hasBlockPadding = {true}
            >
                <p>At Bleecker Studios, our core values are firmly rooted in having grit and a growth mindset. These foundational principles not only guide our actions and drive our performance, but also ensure we remain accountable and true to our mission. Below are the pillars in which our company&apos;s ethos is built, shaping every aspect of how we operate and what we aspire to achieve.</p>
                <Value/>
            </SectionContent>
            


            <SectionContent 
                title = "Our Story"
                icon="lucide:footprints"
                

                alignment = "right"
                hasBlockPadding = {true}
            >
                <p></p>
                <p>Over the past decade, we&apos;ve identified several challenges, that impact organizations of all shapes and sizes. Recognizing these issues was the first step; Now we&apos;ve set out to solve them</p>

                <h6><b>Inundated with Software</b></h6>
                <p>In today&apos;s world, technology inundates every aspect of life. While we embrace this technological advancement with open arms, we&apos;ve also seen how businesses can become overwhelmed, adopting software and hardware that fails to add value — often lying underutilized or completely ignored. Too frequently, tech vendors lure companies into lengthy contracts for tools that barely see any use, leading to unnecessary technical debt. Our mission is centered around helping users, regardless of their technical know-how, to identify mission critical tools and utilize technology that truly meets their needs. We believe in letting businesses concentrate on their core strengths - propelling their growth. Our goal is to help you harness technology in a way that serves you, reigniting your enthusiasm for it.</p>


                <h6><b>Unethical Sales Tactics</b></h6>
                <p>During the tech sales process, the allure of advanced features like connectors, APIs, and sophisticated workflows is often used to captivate potential buyers. However, these features typically aren&apos;t included in standard packages and can be prohibitively expensive to integrate. We advocate for transparency and integrity in sales, ensuring our clients are fully aware of what they&apos;re investing in and receive genuine value without any hidden costs or surprises.</p>

                <h6><b>The Engineer-Business Exec Disconnect</b></h6>
                <p>A common barrier to effective product development is the disconnect between engineers and non-technical stakeholders. Engineers, while skilled in their domain, sometimes miss aligning their output with the actual needs of business executives and users. Our approach bridges this gap, ensuring that our technical teams actively listen and respond to the perspectives and requirements of all stakeholders, leading to more effective and user-centric product development.</p>

                <h6><b>Inflated Hourly Price Tags</b></h6>
                <p>The consulting and professional services industries are notorious for exorbitant hourly rates, often paired with subpar or incomplete solutions. We challenge this norm by offering transparent, value-driven services. Our pricing reflects the true cost of delivering quality solutions, aiming to build trust and long-term relationships with our clients, rather than short-term profits.</p>

                <h6><b>Access</b></h6>
                <p>Accessing affordable, quality development work remains a significant hurdle for non-technical individuals. Many face challenges in articulating their needs for an application, resulting in overpriced services and end products that fail to meet expectations. We are committed to democratizing access to development, offering clear guidance and affordable solutions. By understanding the unique needs of our clients and translating them into functional, user-friendly applications, we strive to close the gap between vision and reality, ensuring satisfaction without the inflated costs.</p>

                <h6><b>Agility</b></h6>
                <p>The landscape of project management is often cluttered with too many stakeholders, leading to a &quot;too many cooks in the kitchen&quot; scenario. This often bloats project lifecycles with unnecessary stakeholders, diluting efficiency and focus. We commonly observe an extended duration spent merely on project scoping. In many cases, the individuals tasked with scoping and estimating efforts have limited technical expertise, resulting in prolonged hours spent in basic explanations rather than advancing the project. Bleecker Studios tackles these issues head-on by implementing a streamlined approach. We focus on minimizing the number of stakeholders involved, ensuring that each participant has a clear, defined role that contributes directly to project progress. Our approach allows us to maintain  sharp focus and significantly cuts down on overhead, resources and time, accelerating the transition from planning to execution. Through these measures, Bleecker Studios enhances project agility, ensuring that projects remain on track, efficient, and aligned with our partner&apos;s goals.</p>


            
            </SectionContent>
            

            <SectionContent 
                title = "Location"
                icon="lucide:navigation"


                alignment = "left"
                hasBlockPadding = {true}
            >   
            <p></p>
                <h3>New York, NY</h3>
                <p> We operate as a remote-first company with a strong physical presence in NYC. We are experts at working collaboratively in any environment (in person, hybrid, and remote). </p>

                <p>While remote-first expands our reach; We&apos;re advocates for real-time, face-to-face collaboration. From working sessions to on-site meetings, and even casual coffee catch-ups, we value connecting, learning, addressing challenges, and cultivating meaningful relationships.</p>
            </SectionContent>
            
            <SectionImage 
                className="my-24"
                src="/images/Hero6.jpg"
                alt="About Page Hero"
            />
        </div>
    )
}

export default About