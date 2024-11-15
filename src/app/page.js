import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import ProductSection from "./sections/ProductSection";
import AboutSection from "./sections/AboutSection";
import IngredientSection from "./sections/IngredientSection";
import StatSection from "./sections/StatSection";
import BlogSection from "./sections/BlogSection";
import Footer from "./sections/Footer";
import BottomBanner from "./sections/BottomBanner";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen">
      <header className="py-6 px-16">
        <Image src="https://ik.imagekit.io/balaharisankar/elbrit/elbrit-logo.png" alt="Elbrit" loading="lazy" />
      </header>
      <main>
        <HeroSection/>
        <FeaturesSection/>
        <ProductSection/>
        <AboutSection/>
        <IngredientSection/>
        <StatSection/>
        <BlogSection/>
        <BottomBanner/>
        <Footer/>
      </main>
    </div>
  );
}
