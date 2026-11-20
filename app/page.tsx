import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Products from "@/components/Products";
import FeaturedProduct from "@/components/FeaturedProduct";
import WhyRaven from "@/components/WhyRaven";
import ProductsGallery from "@/components/ProductsGallery";
import About from "@/components/About";
import DealerProgram from "@/components/DealerProgram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <Platforms />

      <Products />

      <FeaturedProduct />

      <WhyRaven />

      <ProductsGallery />

      <About />

      <DealerProgram />

      <Contact />

      <Footer />

    </main>
  );
}