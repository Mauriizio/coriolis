import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HeroProduct2 from "@/components/HeroProduct2"
import HeroProduct from "@/components/HeroProduct"
import AboutSection from "@/components/AboutSection"
import ProductCatalog from "@/components/ProductCatalog"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero/>
      <HeroProduct2 />
      <HeroProduct />
      
      <ProductCatalog />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
