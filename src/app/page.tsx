import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import ProductsSection from "@/components/home/products-section";

export default function Home() {
  return (
    <div className="min-h-screen space-y-10">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
    </div>
  );
}
