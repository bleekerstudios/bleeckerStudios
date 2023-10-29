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

<SectionImage 
                className="my-24"
                src="/images/Hero2.jpg"
                alt="About Page Hero"
            />
            <SectionContent 
                title = "About"
                alignment = "left"
                hasBlockPadding = {true}
            >
                <p>Bleecker Studios aims to simplify technology implementations. Our ethos is straightforward: Learn, build, and deploy. We streamline the journey from concept to realization, making collaboration effortless. Excited for the opportunity to partner with you.</p>
            </SectionContent>

            <Logos/>

            <SectionContent 
                title = "Our Values"
                alignment = "center"
                hasBlockPadding = {true}
            >
                <Value/>
            </SectionContent>
            


            <SectionContent 
                title = "Our Story"

                alignment = "right"
                hasBlockPadding = {true}
            >
                <p></p>
                <p>Over the past 15 years, the world has been flooded with technology. While we&apos;re passionate enthusiasts, we&apos;ve witnessed companies adopt software and hardware that remains underutilized or even untouched. Tech sales often ensnare businesses in long-term contracts for tools that collect dust. Our mission is to assist individuals, regardless of their tech expertise, in finding solutions that truly resonate with their needs and minimize their technical debt. We believe in letting businesses concentrate on their core strengths - propelling their growth. Our goal is to harness technology in a way that serves you, reigniting your enthusiasm for it.</p>
            </SectionContent>
            

            <SectionContent 
                title = "Location"

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