import Footer from "./footer"
import Header from "./header"

export default function MainLayout({children}:{children:React.ReactNode}){
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
