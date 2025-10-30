import img1 from "@/assets/images/food-img.webp";
import img2 from "@/assets/images/food-img2.webp";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Floating Pepper Top Right */}
          <div className="absolute top-[-50px] md:top-[-150px] right-[50%] md:right-[15%] w-48 h-60 transform rotate-60 z-10 hidden lg:block">
            <Image
              src={img2}
              alt="Jalapeño"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Left Section - Circular Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[500px] h-[500px]">
              {/* Main circular image with vegetables and pattern */}
              <div className="relative w-full h-full">
                <Image
                  src={img1}
                  alt="Costa Vida Fresh Ingredients"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-staatliches uppercase text-turquiose-default">
              SIBUK
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-knewave -rotate-2 inline-block origin-bottom-left text-orange-darker italic mb-8">
              FOODS AND BEVERAGES
            </h3>

            <p className="text-gray-800 text-lg md:text-xl font-roboto leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Sibuk Foods & Beverages Pvt. Ltd. is a fast-growing FMCG and
              food-tech brand from Assam, India. We focus on healthy,
              preservative-free products made with love, innovation, and local
              ingredients — connecting tradition with modern lifestyles.
            </p>

            <button className="bg-black hover:bg-gray-800 text-white px-6 py-[10px] rounded-full text-sm md:text-base font-roboto font-semibold uppercase">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
