"use client";

import img1 from "@/assets/images/banner/1.png";
import img2 from "@/assets/images/banner/2.png";
import img3 from "@/assets/images/banner/3.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Sibuk Banana Chips",
    subtitle: "Pure Banana. Pure Bliss",
    description:
      "From sweet & spicy Horchata to refreshing Limonada, enhance your favorite meal with a refreshing beverage.",
    image: img1,
  },
  {
    id: 2,
    title: "Sibuk Brown Rice",
    subtitle: "Wholesome Grains",
    description:
      "Nourish your body with SIBUK Organic Brown Rice—100% pure, wholesome grains packed with natural fiber and essential nutrients",
    image: img2,
  },
  {
    id: 3,
    title: "Sibuk Poro Apong",
    subtitle: "Heritage in Every Sip",
    description:
      "Discover the authentic taste of SIBUK Poro Apong, a traditional fermented rice beverage rooted in indigenous Mising culture",
    image: img3,
  },
];

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <section className="relative w-full bg-white">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="container min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-[470px] w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-0 lg:px-12 pb-4 sm:pb-6 md:pb-8 lg:pb-12 flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center h-full">
                  {/* Left Content */}
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="">
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-knewave -rotate-2 inline-block origin-bottom-left">
                        <span className="text-orange-darker">
                          {slide.subtitle.toLocaleUpperCase()}
                        </span>
                      </h1>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-staatliches uppercase text-turquiose-default">
                        {slide.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-xl font-roboto">
                      {slide.description}
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-row gap-3 sm:gap-4 font-roboto">
                      <Button
                        size="sm"
                        className="bg-black hover:bg-gray-800 text-white px-6 py-[20px] rounded-full text-sm md:text-base font-semibold uppercase"
                      >
                        Products
                      </Button>
                      <Button
                        size="sm"
                        className="bg-black hover:bg-gray-800 text-white px-6 py-[20px] rounded-full text-sm md:text-base font-semibold uppercase"
                      >
                        Visit Our Restaurant
                      </Button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative flex justify-center items-center">
                    <div className="relative w-full max-w-[280px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-lg aspect-square">
                      <div className="relative z-10 flex justify-center items-center h-full">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={450}
                          height={450}
                          className="object-contain w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Next Button - Hidden on mobile */}
        <button
          onClick={handleNext}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black hover:bg-gray-800 rounded-full items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </Carousel>
    </section>
  );
}
