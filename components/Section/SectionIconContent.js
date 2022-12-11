import SectionTitle from "@components/Section/SectionTitle"
// You can get icons from iconify - just add the name on the Primary Button Props


const SectionContent = ({content, title, subheading, icon, isBigHeader, isReversed }) => {
    return (
        <section className = {`section-content-container wrap`}>
            <div className={`section-content text-center md:text-left`}>
                <SectionTitle 
                    title = {title}
                    subheading = {subheading}
                    isBigHeader = {false}
                    icon = {icon}
                />
                <div className="content-container text-black/60">
                    <p>{content}</p>
                </div>
            </div>
        </section>
    )
}

export default SectionContent