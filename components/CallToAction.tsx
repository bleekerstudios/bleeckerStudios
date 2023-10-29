import SectionContent from '@components/Section/SectionContent'
import SubscribeForm from '@components/Forms/SubscribeForm'


const link = "https://www.google.com"

const CallToAction = () => {

    return (
        <section className="cta-container my-24">
            <div className="cta-content-container wrap wrap-px">
                <SectionContent 
                    title = "Don't Know Where To Begin?"
                    alignment = "center"
                >
                    <p>Contact Us or Check out some common Use Cases.</p>

                    <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                <a href="https://bleeker-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-secondary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Contact Us</button>
                </a>
                <p></p>

                <a href="https://bleeker-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Use Cases</button>
                </a>
                </div>

                </SectionContent>
                
              

            </div>
        </section>
    )
}

export default CallToAction