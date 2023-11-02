import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionImage from "@components/Section/SectionImage"
import BadgeGroup from "@components/BadgeGroup"
import Button, { ButtonVariant } from "@components/Button/Button"
import BadgeContext from "@components/Badge/BadgeContext"
import BadgeMessage from "@components/Badge/BadgeMessage"
import BadgeIcon from "@components/Badge/BadgeIcon"
import Stats from "./stats"
import MyComponent from "./insights"

 
  



const Hero = () => {
    const alignment = "center"

    return (
        <section className="hero-container">
            <div className="hero-content-container py-16 ">
                <BadgeGroup alignment={alignment}>
                    <BadgeContext>
                        <span></span>
                    </BadgeContext>
                    <BadgeMessage>
                        Welcome
                    </BadgeMessage>
                    <BadgeIcon icon="mdi:map-marker-path"/>
                </BadgeGroup>
                <SectionContent 
                    title = "Bleecker Studios"
                    alignment = {alignment}
                    isBigHeader = {true}
                >
                    <h3>Everyone has ideas, we bring them to life.  </h3>
                    <p>We design, develop, and deploy technology solutions with a singular focus: making technology work for you. Our solutions solve your problems, improve operational efficiency, and optimize resource utilization</p>


                </SectionContent>
                <ButtonGroup className = "wrap-sm wrap-px" alignment={alignment}>
                    <Button 
                        text="Get Started" 
                        link="/getStarted"
                        icon="ph:arrow-right-bold"
                        variant={ButtonVariant.primary}
                    />
                    <Button 
                        text="Contact Us" 
                        link="/getStarted"
                        variant={ButtonVariant.secondary}
                    />




                    
                </ButtonGroup>

             <br></br>
                <SectionImage 
                src="/images/bluetitle.svg"
                alt="Hero Image used for Hero Banner"
            />








            </div>
            
                <div className="flex flex-col md:flex-row px-6">

                <SectionContent
                title = "Tangible Results Weeks After Deployment"
                subheading = "Our Impact"

                alignment = "left"
                isBigHeader = {true}>
                    <p>We measure success based on quantifiable business impact</p>
                
                
                
                    
                    </SectionContent>
              
                    <section className="logos-container wrap wrap-px">
            <div className="logos-content-container p-2 md:p-5 rounded-2xl  bg-badge gap-y-2 px-6 py-16">
                <div className="content-container text-black text-center ">
                <MyComponent/>


                    </div>
                    </div>
                    </section>
            
                    </div>
        </section>
    )
}

export default Hero