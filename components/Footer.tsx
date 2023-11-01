import Link from "next/link"

const DATA = [
    { 
        label: 'Home', 
        href: '/' 
    },
    {
        label: 'About',
        href: '/about'
    },
    
    { 
        label: 'Services', 
        href: '/Services' 
    },
    
    
    { 
        label: 'Get Started', 
        href: '/getStarted' 
    },
   
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/'
    }
]


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer id="footer">
            <section className="footer-container wrap wrap-px">
                <div className="footer-content-container my-16 md:my-24">
                    <div className="footer-links grid grid-cols-2 gap-8 md:grid-cols-8 lg:grid-cols-12 mb-12 md:mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <ul>
                            {DATA.slice(0, DATA.length / 2).map( item => (
                                    <li key={item.label} className="gap-2">
                                        <a className="font-medium block w-auto mb-2 hover:text-primary-500 transition-colors duration-300" href={item.href}>
                                            {item.label}
                                            
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <ul>
                            {DATA.slice(DATA.length / 2).map( item => (
                                    <li key={item.label} className="gap-2">
                                        <a className="font-medium block w-auto mb-2 hover:text-primary-500 transition-colors duration-300" href={item.href}>
                                            {item.label}
                                            
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-credits text-black/60">

                        <p>917.232.7121 | info@bleecker-studios.com<span className="font-semibold"> <Link className="hover:text-primary-500 transition-colors duration-300" href="" target="_blank"></Link></span></p>

                        <p>© {year} - Bleecker Studios. All rights reserved. <span className="font-semibold"> <Link className="hover:text-primary-500 transition-colors duration-300" href="https://cjluntok.com" target="_blank"></Link></span></p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
