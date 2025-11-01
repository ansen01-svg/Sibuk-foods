import img1 from "@/assets/images/products/Bamboo shoot.png";
import img7 from "@/assets/images/products/banana chips.png";
import img2 from "@/assets/images/products/Black pepper.png";
import img8 from "@/assets/images/products/cranberry juice.png";
import img9 from "@/assets/images/products/kiwi juice.png";
import img3 from "@/assets/images/products/mango juice.png";
import img6 from "@/assets/images/products/mustard oil.png";
import img4 from "@/assets/images/products/Sibuk Almond Oil.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: StaticImageData;
}

const products: Product[] = [
  { id: "1", name: "BAMBOO SHOOTS", image: img1 },
  { id: "2", name: "BLACK PEPPER", image: img2 },
  {
    id: "3",
    name: "MANGO JUICE",
    image: img3,
  },
  { id: "4", name: "ALMOND OIL", image: img4 },
  {
    id: "5",
    name: "MUSTARD OIL",
    image: img6,
  },
  {
    id: "6",
    name: "BANANA CHIPS",
    image: img7,
  },
  {
    id: "7",
    name: "CRANBERRY JUICE",
    image: img8,
  },
  {
    id: "8",
    name: "KIWI JUICE",
    image: img9,
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-orange-default py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="w-full h-[250px] bg-white absolute top-0 left-0"></div>

      {/* Decorative wavy lines */}
      <div className="absolute right-0 top-0 opacity-20 text-turquoise-default/30">
        <svg width="150" height="400" viewBox="0 0 150 400" fill="none">
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={`M ${20 + i * 25} 0 Q ${20 + i * 25} 50, ${
                35 + i * 25
              } 100 T ${20 + i * 25} 200 T ${20 + i * 25} 300 T ${
                20 + i * 25
              } 400`}
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Orange Card Section - Exact Costa Vida Design */}
        <div className="relative mb-24">
          {/* White border wrapper for organic shape */}
          <div className="bg-white rounded-[3rem] sm:rounded-[6.5rem] p-2 md:p-2.5">
            <div className="bg-dark-light rounded-[3rem] sm:rounded-[6.5rem] px-8 py-12 md:px-16 md:py-16 lg:px-20 lg:py-20 relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Section - Title */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-staatliches uppercase text-white mb-4">
                    PARTNER
                  </h2>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-staatliches uppercase text-white mb-8 tracking-tight">
                    WITH US
                  </h3>
                </div>

                {/* Right Section - Description & Link */}
                <div className="flex-1 flex flex-col items-center sm:items-start max-w-2xl text-white text-sm sm:text-base md:text-lg font-roboto">
                  <p className="leading-relaxed mb-6">
                    {`Join the Sibuk family and bring fresh local products
                    to your community. We're looking for passionate partners who
                    share our commitment to quality ingredients and exceptional
                    customer experiences.`}
                  </p>
                  <div className="flex flex-wrap gap-4 text-white font-semibold">
                    <a
                      href="/partner"
                      className="inline-block bg-transparent border-2 border-white px-6 py-3 text-white font-roboto rounded-full hover:bg-white hover:text-dark-light transition-colors uppercase text-sm md:text-base"
                    >
                      Partner With Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative dots on orange background */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-white/20 rounded-full" />
              <div className="absolute top-12 left-16 w-1 h-1 bg-white/20 rounded-full" />
              <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mb-24">
          {products.map((product) => (
            <div
              key={product.id}
              className="px-10 py-8 flex flex-col items-center justify-center rounded-[3rem] group cursor-pointer bg-orange-default hover:bg-orange-darkest transition-colors duration-300"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-white font-staatliches text-2xl md:text-3xl text-center tracking-wider">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* View Products Button */}
        <div className="text-center">
          <h4 className="text-white text-3xl md:text-4xl lg:text-5xl font-knewave italic mb-8">
            Nature-Inspired, Made for Today
          </h4>
          <h4 className="text-white text-3xl md:text-4xl lg:text-5xl font-knewave italic mb-8">
            “Go Healthy, Go Tasty”
          </h4>
          <Link
            href={"/products"}
            className="bg-dark-light hover:bg-dark-lighter text-white px-6 py-[12px] rounded-full text-sm md:text-base font-semibold hover:bg-black/90 transition-colors uppercase"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
