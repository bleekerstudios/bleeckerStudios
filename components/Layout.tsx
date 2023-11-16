import Header from "@components/Header"
import Footer from "@components/Footer"
import { Analytics } from '@vercel/analytics/react';


const Layout = ({ children }) => {
    return(
        <div className="overflow-x-hidden min-h-screen pt-10">
            <Header />
                <main id="main" className="main-container">
                    { children }
                    <Analytics />

                </main>
            <Footer />
        </div>
    )
}

export default Layout