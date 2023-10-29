import Button, { ButtonVariant } from '@components/Button/Button'
import Nav from '@components/Nav'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header id="header" className="wrap wrap-px">
            <div className="header-container relative py-4 justify-between md:justify-start flex items-center">
                <div className="flex items-center mr-8">
                    <h1>
                        <Link href="/" className="logo">
                            <Image 
                                src="/images/blackestmask.png" 
                                alt="logo"
                                className="h-10 w-auto"
                                height="25"
                                width="100"
                                priority
                            />
                        </Link>
                        <span className="hidden">Bleecker Logo</span>
                    </h1>
                </div>
                <Nav />
                <div className="button-container hidden md:flex flex-wrap gap-4 ml-auto">
                    <Button 
                        text="Learn More"
                        link="getStarted"
                        variant={ButtonVariant.primary}
                    />
                    <Button 
                        text="Contact"
                        link="/contact"
                        variant={ButtonVariant.secondary}
                    /> 
                </div>
            </div>
        </header>
    )
}

export default Header