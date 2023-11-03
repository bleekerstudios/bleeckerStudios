import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import Value from '@components/value'

const About = () => {
    const pageTitle = `About | ${process.env.siteTitle}`
    return (
        <div className="main-content-container wrap pt-10">
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
                <p>We simplify technology implementations. Our ethos is straightforward: Learn, build, and deploy. We streamline the journey from concept to realization, making collaboration effortless. Excited for the opportunity to partner with you.</p>
            </SectionContent>



<SectionImage 
                className="my-5"
                src="/images/yellowwidenet.svg"
                alt="About Page Hero"
            />
           


            <SectionContent 
                title = "Values That Guide Us"
                icon="lucide:helping-hand"

                alignment = "center"
                hasBlockPadding = {true}
            >
                <p>At Bleecker Studios, our core values are firmly rooted in having grit and a growth mindset. These foundational principles not only guide our actions and drive our performance, but also ensure we remain accountable and true to our mission. Below are the pillars in which our company&apos;s ethos is built, shaping every aspect of how we operate and what we aspire to achieve.</p>
                
            </SectionContent>

            <section className="logos-container wrap wrap-px">
            <div className="logos-content-container p-2 md:p-5 rounded-2xl my-24 bg-badge gap-y-2">
                <div className="content-container text-black text-center">
            <Value/>
            </div>
                        </div>

            </section>


            
            
         
            

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
                src="/images/mauve.svg"
                alt="About Page Hero"
            />

<Logos/>

        </div>
    )
}

export default About