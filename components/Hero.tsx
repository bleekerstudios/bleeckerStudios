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
            <div className="hero-content-container pt-10  bg-lime-100 ">
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
                    <p>We design, develop, and deploy technology solutions with a singular focus: making technology work for you. Our solutions solve your problems, improve operational efficiency, and optimize resource utilization.</p>


                </SectionContent>
                <ButtonGroup className = "wrap-sm wrap-px pb-2" alignment={alignment}>
                    <Button 
                        text="Get Started" 
                        link="/getStarted"
                        icon="ph:arrow-right-bold"
                        variant={ButtonVariant.primary}
                    />
                    



                    
                </ButtonGroup>


            </div>

            <SectionImage className=""
                src="/images/editedpwave.svg"
                alt="Hero Image used for Hero Banner"
            />
            
              
        </section>
    )
}

export default Hero