import SectionContent from '@components/Section/SectionContent'
import SubscribeForm from '@components/Forms/SubscribeForm'


const link = "https://www.google.com"

const CallToAction = () => {

    return (
        <section className="cta-container pt-20  ">
            <div className="cta-content-container wrap wrap-px  py-6 ">
                <SectionContent 
                    title = "Don't Know Where To Begin?"
                    alignment = "center"
                >
                    <p className="">Contact us for more details</p>

                    <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                {/* <a href="https://bleeckerstudios.vercel.app/contact" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-secondary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Contact Us</button>
                </a>
    <p></p> */}

                <a href="/getStarted" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8 text-white py-2 rounded-full hover:bg-primary-300  duration-30">Get In Touch</button>
                </a>
                </div>

                </SectionContent>
                
              

            </div>
        </section>
    )
}

export default CallToAction