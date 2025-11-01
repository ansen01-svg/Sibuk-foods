"use client";

import img7 from "@/assets/images/products/apong.png";
import img6 from "@/assets/images/products/bacon.png";
import img5 from "@/assets/images/products/banana chips.png";
import img11 from "@/assets/images/products/Black pepper.png";
import img4 from "@/assets/images/products/cranberry juice.png";
import img3 from "@/assets/images/products/kiwi juice.png";
import img2 from "@/assets/images/products/mango juice.png";
import img1 from "@/assets/images/products/mustard oil.png";
import img10 from "@/assets/images/products/Pineaple Dried.png";
import img9 from "@/assets/images/products/Sibuk Almond Oil.png";
import img8 from "@/assets/images/products/Sibuk Poro Apong Red.png";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  details: string;
  image: StaticImageData;
  category: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Sibuk Mustard Oil",
    description: "100% pure, cold-pressed, rich in aroma and nutrients",
    details:
      "Our premium mustard oil is cold-pressed from the finest mustard seeds, preserving all natural nutrients and the authentic pungent aroma. Perfect for traditional Northeast cooking and health-conscious families.",
    image: img1,
    category: "Oils & Essentials",
  },
  {
    id: "2",
    name: "Sibuk Banana Chips",
    description: "Crisp, healthy, and naturally made from Assam bananas",
    details:
      "Handpicked Assam bananas sliced thin and perfectly fried to golden perfection. No artificial preservatives, just pure banana goodness that brings the authentic taste of Northeast to your snack time.",
    image: img2,
    category: "Snacks",
  },
  {
    id: "3",
    name: "Sibuk Tea",
    description: "Premium Assam tea with unmatched strength and flavor",
    details:
      "Sourced from the lush tea gardens of Assam, our premium tea leaves offer a robust, malty flavor with a distinctive briskness. Experience the world-renowned Assam tea in every cup.",
    image: img3,
    category: "Beverages",
  },
  {
    id: "4",
    name: "Sibuk Brown Rice",
    description: "Wholesome and fiber-rich for a healthy lifestyle",
    details:
      "Naturally cultivated brown rice from the fertile plains of Northeast India. Rich in fiber, vitamins, and minerals, it's the perfect choice for health-conscious individuals seeking authentic, nutritious grains.",
    image: img4,
    category: "Grains & Rice",
  },
  {
    id: "5",
    name: "Sibuk Eco-Mix Shakes",
    description: "On-the-go shakes in eco-friendly sachet cups",
    details:
      "Convenient, nutritious shake mixes made from natural ingredients and packaged in environmentally friendly sachets. Perfect for busy lifestyles without compromising on health or sustainability.",
    image: img5,
    category: "Beverages",
  },
  {
    id: "6",
    name: "Sibuk Spices",
    description: "Authentic blends from the Northeast",
    details:
      "A curated collection of traditional spice blends that capture the essence of Northeast cuisine. From fiery chilies to aromatic herbs, each blend tells a story of our rich culinary heritage.",
    image: img6,
    category: "Spices",
  },
  {
    id: "7",
    name: "Sibuk Bamboo Shut",
    description: "Traditional fermented bamboo shoots for authentic flavors",
    details:
      "Traditionally fermented bamboo shoots that add a unique umami flavor to your dishes. A staple in Northeast cuisine, prepared using age-old methods passed down through generations.",
    image: img7,
    category: "Traditional Foods",
  },
  {
    id: "8",
    name: "Sibuk Banana Powder",
    description: "Natural banana powder for health and nutrition",
    details:
      "Dehydrated banana powder made from premium Assam bananas. Rich in potassium and natural sugars, it's perfect for smoothies, baking, and as a natural sweetener.",
    image: img8,
    category: "Health Foods",
  },
  {
    id: "9",
    name: "Sibuk Black Papper",
    description: "Premium black pepper with intense flavor",
    details:
      "Carefully selected and processed black pepper that delivers a sharp, pungent flavor. Essential for any kitchen, our black pepper adds depth and warmth to every dish.",
    image: img9,
    category: "Spices",
  },
  {
    id: "10",
    name: "Sibuk Cranberry Premium Juice",
    description: "100% natural cranberry juice in premium bottle",
    details:
      "Pure cranberry juice with no added sugars or preservatives. Rich in antioxidants and vitamins, this refreshing beverage supports overall wellness while delighting your taste buds.",
    image: img10,
    category: "Beverages",
  },
  {
    id: "11",
    name: "Sibuk Digestive",
    description: "Natural digestive aid for better gut health",
    details:
      "A blend of traditional herbs and natural ingredients that support healthy digestion. Perfect as an after-meal supplement to promote comfort and wellness.",
    image: img10,
    category: "Health Foods",
  },
  {
    id: "12",
    name: "Sibuk Herbal Tea",
    description: "Aromatic herbal tea blends for wellness",
    details:
      "Carefully crafted herbal tea blends using traditional Northeast herbs. Each cup offers therapeutic benefits while soothing your senses with natural aromas and flavors.",
    image: img11,
    category: "Beverages",
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header - Add your navigation component here */}

      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-teal-600 mb-8">
                OUR PRODUCTS
              </h1>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>We source the highest-quality ingredients</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>We make our products from scratch with care</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>
                    We craft food that makes you feel nourished, not weighed
                    down
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Brand Philosophy</h2>
              <p className="text-gray-700 leading-relaxed">
                {`We believe food is more than nourishment — it's an emotion that
                connects culture, family, and nature. Sibuk is built on
                sustainability, purity, and a vision to represent the Northeast
                as a global food destination.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer group"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image with 3D Turquoise Shadow */}
                <div className="relative mb-6">
                  {/* Turquoise 3D shadow base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full transform translate-y-6 scale-95 blur-sm opacity-60"></div>
                  <div className="absolute inset-0 bg-teal-500 rounded-full transform translate-y-4 scale-[0.97] opacity-80"></div>

                  {/* White circular container */}
                  <div className="relative bg-white rounded-full aspect-square shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <button className="font-semibold text-sm underline hover:text-teal-600 transition-colors uppercase tracking-wide">
                    SEE MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal - Centered */}
      {selectedProduct && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40 transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />

          {/* Centered Modal */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 overflow-y-auto">
            <div className="bg-white rounded-lg max-w-2xl w-full shadow-2xl relative animate-fade-in mb-20">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center z-10 transition-colors shadow-lg"
              >
                <X className="w-8 h-8" strokeWidth={2.5} />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-bold uppercase mb-2">
                  {selectedProduct.name}
                </h2>

                {/* Orange accent line */}
                <div className="h-1 bg-orange-500 w-full mb-4" />

                {/* Product Image with 3D Shadow */}
                <div className="relative mb-8 mx-auto w-80 max-w-full">
                  {/* Turquoise 3D shadow base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full transform translate-y-6 scale-95 blur-sm opacity-60"></div>
                  <div className="absolute inset-0 bg-teal-500 rounded-full transform translate-y-4 scale-[0.97] opacity-80"></div>

                  {/* White circular container */}
                  <div className="relative bg-white rounded-full aspect-square shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <Image
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        width={400}
                        height={400}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-8 text-center">
                  {selectedProduct.details}
                </p>

                {/* CTA Button */}
                <Button className="w-full bg-black hover:bg-gray-800 text-white px-8 py-6 text-base rounded-full font-semibold uppercase tracking-wide">
                  START AN ORDER
                </Button>

                {/* Popular Product Banner (Optional) */}
                {selectedProduct.id === "1" && (
                  <div className="bg-yellow-400 p-6 mt-6 rounded-lg relative">
                    <div className="absolute -top-4 -right-4 bg-gray-800 text-yellow-400 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg transform -rotate-12">
                      YES!
                    </div>
                    <h3 className="text-xl font-bold italic mb-2">
                      QUICK TIP: DIP!
                    </h3>
                    <p className="text-sm">
                      Grab a side of our special sauce and dip your{" "}
                      {selectedProduct.name.toLowerCase()} in it!{" "}
                      {`You're
                      welcome.`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
