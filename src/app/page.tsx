import Header from "@/components/Header"
import HeroProduct from "@/components/HeroProduct"
import AboutSection from "@/components/AboutSection"
import ProductCatalog from "@/components/ProductCatalog"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroProduct />
      <AboutSection />
      <ProductCatalog />
      <ContactSection />
      <Footer />
    </main>
  )
}
