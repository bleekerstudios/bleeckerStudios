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
import { motion } from "framer-motion";




 
  



const Hero = () => {
    const alignment = "center"

    return (
        <section className="hero-container pt-10  bg-lime-100 ">





                <BadgeGroup alignment={alignment}>
                    <BadgeContext>
                        <span></span>
                    </BadgeContext>
                    <BadgeMessage>
                        Welcome
                    </BadgeMessage>
                    <BadgeIcon icon="mdi:map-marker-path"/>
    </BadgeGroup> 

    

    <motion.div
      className="box  bg-lime-100 "
      animate={{
        scale: [0, 1, 1, 1, 1],
        rotate: [0, 0, 0, 0, 0],
        borderRadius: ["0%", "0%", "0%", "0%", "0%"]
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: 0,
        repeatDelay: 0
      }}
    >
                
                <SectionContent 
                    title = "Bleecker Studios"
                    alignment = {alignment}
                    isBigHeader = {true}
                >
                    <h3>Everyone has ideas, we bring them to life.  </h3>
                    <p>We design, develop, and deploy technology solutions with a singular focus: making technology work for you.</p>



                </SectionContent>
                <ButtonGroup className = "wrap-sm wrap-px pb-2 " alignment={alignment}>
                    <Button 
                        text="Get Started" 
                        link="/getStarted"
                        icon="ph:arrow-right-bold"
                        variant={ButtonVariant.primary}
                    />


            
                    
                </ButtonGroup>

                </motion.div>

                
    
    
    


            <SectionImage className=" "
                src="/images/editedpwave.svg"
                alt="Hero Image used for Hero Banner"
            />

  


 
              
        </section>
    )
}

export default Hero