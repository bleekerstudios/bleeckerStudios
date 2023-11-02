import FeatureContent from "@components/Feature/FeatureContent"
import MyComponent from "./insights"



const Stats = () => {
    return (
        <section className="feature-container my-1 py-16 bg-badge rounded-2xl">
            <div className="feature-content wrap wrap-px">
                <div className="feature-content-container">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-y-12 md:gap-y-0 gap-8">
                        
                      <MyComponent/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats