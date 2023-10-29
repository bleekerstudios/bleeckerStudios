import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionImage from "@components/Section/SectionImage"
import BadgeGroup from "@components/BadgeGroup"
import Button, { ButtonVariant } from "@components/Button/Button"
import BadgeContext from "@components/Badge/BadgeContext"
import BadgeMessage from "@components/Badge/BadgeMessage"
import BadgeIcon from "@components/Badge/BadgeIcon"


function handleButtonClick() {
    window.location.href = 'https://bleekerstudios.retool.com/embedded/public/859a2557-e00f-480c-a2e4-2d5429e75f77';
  }
 
  



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
                    <p>We build & deploy technology solutions that will save you time, money, and energy</p>
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
                        link="/contact"
                        variant={ButtonVariant.secondary}
                    />




                   
                    
                </ButtonGroup>

             









            </div>
            <SectionImage 
                src="/images/Hero.jpg"
                alt="Hero Image used for Hero Banner"
            />
        </section>
    )
}

export default Hero