import curryLeafImg from "@/assets/images/about//curry-leaves-transparent.png";
import thaliImg from "@/assets/images/about/2.png";
import babyCornImg from "@/assets/images/about/Babycorn.webp";
import mapBgImg from "@/assets/images/about/map-bg-1.webp";
import founderImg from "@/assets/images/about/Midish Pic.png";
import farmImage from "@/assets/images/about/Sibuk Agro Farm.png";
import kitchenImg1 from "@/assets/images/about/Sibuk Fresh Mart Exterior.webp";
import kitchenImg2 from "@/assets/images/about/Sibuk Fresh Mart Interior.webp";
import parkImg from "@/assets/images/about/Sibuk Guerrilla Marketing Concept.webp";
import kitchenImg from "@/assets/images/about/Sibuk Mising Kitchen Interior Sample.png";
import cup from "@/assets/images/about/sibuk-cup.png";
import ecoMixCup from "@/assets/images/about/sibuk-eco-mix.png";
import img1 from "@/assets/images/food-img2.webp";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* Hero Section - Fully Responsive */}
      <section
        className="relative min-h-[600px] md:min-h-screen py-12 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mapBgImg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative container mx-auto px-4 md:px-6 pt-8 md:pt-20">
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-orange-darker font-knewave text-xl md:text-2xl italic mb-2">
              One Founder,
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-turquiose-default font-staatliches tracking-tight px-4">
              ONE VISION
            </h1>
          </div>

          {/* Main Layout - Responsive */}
          <div className="relative max-w-7xl mx-auto">
            {/* Mobile Layout - Stacked (< lg screens) */}
            <div className="lg:hidden flex flex-col items-center space-y-8 pb-16">
              {/* Founder Photo - Mobile */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                <div className="relative w-full h-full rounded-full border-6 sm:border-8 border-yellow-400 overflow-hidden shadow-2xl">
                  <Image
                    src={parkImg}
                    alt="Midish Kumar Doley"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Polaroid Photo - Mobile */}
              <div className="relative max-w-xs sm:max-w-sm px-4">
                <div className="relative bg-white p-3 sm:p-4 shadow-2xl transform rotate-2">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={babyCornImg}
                      alt="Sibuk Foods"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Established Badge */}
                  <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-gray-800 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-xl border-3 sm:border-4 border-orange-500">
                    <div className="text-center">
                      <p className="text-[10px] sm:text-xs font-bold">estd.</p>
                      <p className="text-xl sm:text-2xl font-black text-orange-400">
                        2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Absolute Positioning (>= lg screens) */}
            <div className="hidden lg:block">
              {/* Left Founder Photo */}
              <div className="absolute left-0 top-20 xl:top-32 w-56 h-56 xl:w-64 xl:h-64">
                <div className="relative w-full h-full rounded-full border-8 border-yellow-400 overflow-hidden shadow-2xl">
                  <Image
                    src={thaliImg}
                    alt="Midish Kumar Doley"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center Polaroid Photo */}
              <div className="relative mx-auto max-w-md pt-32">
                <div className="relative bg-white p-4 shadow-2xl transform rotate-2">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={parkImg}
                      alt="Sibuk Foods"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Established Badge */}
                  <div className="absolute -top-8 -right-8 bg-gray-800 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl border-4 border-orange-500">
                    <div className="text-center">
                      <p className="text-xs font-bold">estd.</p>
                      <p className="text-2xl font-black text-orange-400">
                        2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Food Images - Desktop Only */}
              <div className="absolute -top-10 left-72 w-28 h-28 xl:w-32 xl:h-32 opacity-90">
                <Image
                  src={img1}
                  alt="Product"
                  fill
                  className="object-contain rounded-full"
                />
              </div>

              <div className="absolute top-0 right-20 w-32 h-32 xl:w-36 xl:h-36 opacity-90 rounded-full">
                <Image
                  src={curryLeafImg}
                  alt="Product"
                  fill
                  className="object-contain rounded-full"
                />
              </div>

              <div className="absolute bottom-10 right-32 w-32 h-32 xl:w-36 xl:h-36 opacity-90">
                <Image
                  src={babyCornImg}
                  alt="Product"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Beginnings Section - Responsive */}
      <section
        className="relative py-12 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mapBgImg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Business Photo */}
            <div className="relative order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-sm sm:max-w-sm mx-auto rounded-full border-6 sm:border-8 border-teal-500 overflow-hidden shadow-2xl">
                <Image
                  src={founderImg}
                  alt="Business Journey"
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
              <div className="inline-flex items-center gap-3 md:gap-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-knewave text-dark-light italic">
                  THE BEGINNINGS
                </h2>
              </div>

              <div className="space-y-3 md:space-y-4 text-dark-light text-base md:text-lg leading-relaxed font-roboto">
                <p>
                  Founded in 2024,{" "}
                  <strong>Sibuk Foods & Beverages Pvt. Ltd.</strong>{" "}
                  {`is a
                  proudly homegrown food and beverage company based in Assam,
                  created to redefine purity, taste, and sustainability in
                  India's FMCG sector. Our journey began with a visionary
                  entrepreneur passionate about community, family, and authentic
                  Northeast Indian cuisine.`}
                </p>
                <p>
                  Founder <strong>Midish Kumar Doley</strong>, with 10+ years of
                  experience in hospitality and business consulting, guided
                  1,000+ businesses and led a 1,600+ consultant network as a
                  Channel Partner at Bada Business under Dr. Vivek Bindra. After
                  extensive market research and training under 40+ billionaire
                  entrepreneurs, Midish established Sibuk with one mission: to
                  deliver natural, nutrient-rich products while empowering
                  farmers and preserving cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fueling Growth Section - Responsive */}
      <section
        className="relative py-12 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mapBgImg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-knewave text-dark-light italic">
                FUELING GROWTH
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-dark-light font-roboto md:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                With dual innovation at our core, Sibuk combines technology with
                tradition. Our <strong>patent-filed EcoMix™ Cup</strong> is a
                foldable, biodegradable ready-to-mix beverage solution that
                revolutionizes on-the-go consumption while protecting the
                planet.
              </p>
              <p>
                Our focus on <strong>empowering rural communities</strong>{" "}
                through partnerships with SHGs, FPOs, and local farmers has
                created sustainable income opportunities. {`We've secured`}{" "}
                <strong>40 bighas of land</strong> for our multi-product
                processing facility, establishing both backward integration with
                farmers and forward integration through retail outlets, cloud
                kitchens, and franchise opportunities.
              </p>
            </div>

            {/* Decorative Food Elements - Desktop only */}
            {/* <div className="hidden xl:block absolute -left-10 top-1/2 -translate-y-1/2 w-28 h-28 opacity-90">
              <Image src={img1} alt="Product" fill className="object-contain" />
            </div>
            <div className="hidden xl:block absolute -right-10 top-1/2 -translate-y-1/2 w-28 h-28 opacity-90">
              <Image src={img1} alt="Product" fill className="object-contain" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Innovation & Products Showcase Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-knewave text-dark-light italic mb-4">
                OUR INNOVATIVE{" "}
                <span className="text-xl sm:text-2xl md:text-3xl font-knewave text-dark-light italic">
                  SOLUTIONS
                </span>
              </h2>
            </div>

            {/* InstaMix Product Showcase */}
            <div className="p-8 md:p-12 mb-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-staatliches text-turquiose-default mb-6">
                    Sibuk InstaMix
                  </h3>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-dark-light mb-3">
                      SIBUK Insta Mix - Flavored Shake Sachets + EcoMix Cup
                    </h4>
                    <ul className="space-y-2 text-dark-light font-roboto">
                      <li>
                        <span className="">Pineapple Shake</span> – Refreshing
                        tropical flavor
                      </li>
                      <li>
                        <span className="">Banana Shake</span> – Rich, creamy
                        natural taste
                      </li>
                      <li>
                        <span className="">Strawberry Shake</span> – Fruity and
                        sweet delight
                      </li>
                      <li>
                        <span className="">Vanilla Shake</span> – Classic,
                        smooth vanilla
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3 text-dark-light font-roboto">
                    <p className="font-bold">
                      A revolutionary on-the-go beverage solution
                    </p>
                    <ul className="space-y-2">
                      <li>• Pre-measured, preservative-free drink powders</li>
                      <li>• Convenience + sustainability in one pack</li>
                      <li>• Quick, healthy, eco-conscious alternative</li>
                    </ul>
                    <p className="text-turquiose-default/80 italic font-semibold mt-4">
                      {`"Sip health, save time, and protect the planet – all in
                      one combo pack."`}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md h-[300px] md:h-[400px]">
                    <Image
                      src={ecoMixCup}
                      alt="InstaMix Combo Pack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Advantage Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Competitive Advantage - Paragraph Format */}
              <div className="p-8 md:p-12">
                <h3 className="text-lg sm:text-xl md:text-2xl font-staatliches text-turquiose-default mb-4">
                  Sibuk Eco Mix Cup
                </h3>

                <div className="space-y-4 text-dark-light font-roboto md:text-lg leading-relaxed">
                  <p>
                    The{" "}
                    <strong className="text-gray-900">Sibuk EcoMi Cup</strong>{" "}
                    represents a revolutionary breakthrough in sustainable
                    beverage packaging.
                  </p>

                  <p>
                    Unlike traditional beverage containers, the EcoMix Cup is{" "}
                    <strong className="">100% biodegradable</strong>, breaking
                    down naturally without harming the environment. Its
                    innovative{" "}
                    <strong className="">
                      collapsible and foldable design
                    </strong>{" "}
                    makes it incredibly{" "}
                    <strong className="">travel-friendly</strong>, allowing
                    consumers to carry healthy beverages anywhere without the
                    bulk of conventional cups.
                  </p>
                </div>
              </div>

              {/* Cup Diagram */}
              <div className="p-8 flex flex-col justify-center">
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <Image
                    src={cup}
                    alt="EcoMix Cup Design"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Future Outlets Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-staatliches font-medium text-green-400 mb-4">
                  Our Vision: Future Outlets
                </h3>
                <p className="text-white font-roboto text-lg md:text-xl max-w-3xl mx-auto">
                  Bringing healthy, authentic Northeast Indian products to
                  communities across India
                </p>
              </div>

              {/* 3-Column Outlet Images */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* Outlet 1 - Sibuk Fresh Mart */}
                <div className="group">
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-4 shadow-2xl">
                    <Image
                      src={kitchenImg}
                      alt="Sibuk Fresh Mart"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Outlet 2 - Sibuk Mising Kitchen */}
                <div className="group">
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-4 shadow-2xl">
                    <Image
                      src={kitchenImg1}
                      alt="Sibuk Mising Kitchen"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Outlet 3 - Sibuk Experience Center */}
                <div className="group">
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-4 shadow-2xl">
                    <Image
                      src={kitchenImg2}
                      alt="Sibuk Experience Center"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Future of Purpose Section - Responsive */}
      <section
        className="relative py-12 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mapBgImg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-knewave text-dark-light italic">
                A FUTURE OF PURPOSE
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-dark-light font-roboto text-base md:text-lg leading-relaxed">
              <p className="text-lg md:text-xl font-semibold">
                The journey has just begun.
              </p>
              <p>
                {`With ambitious expansion plans, Sibuk Foods & Beverages is growing rapidly
                across multiple verticals — ethnic restaurants (Sibuk Mising Kitchen),
                grocery marts (Sibuk Fresh Mart), value-added products, and sustainable
                agro-tourism. Our mission remains unchanged: putting our treasured guests
                first and creating Moments of Better for them.`}
              </p>
              <p className="text-turquiose-default font-semibold italic">
                {`Registered with MCA, Startup India DPIIT certified, and ready to
                scale — we're built from the heart of Northeast India, powered
                by sustainability, guided by innovation.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Food Philosophy Section - Responsive */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left - Text Content */}
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1 lg:pr-8 xl:pr-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-knewave text-dark-light italic">
                  OUR FOOD
                  <br />
                  <span className="text-dark-light italic">PHILOSOPHY</span>
                </h2>

                <div className="space-y-3 md:space-y-4 text-dark-light font-roboto  text-base md:text-lg leading-relaxed">
                  <p className="text-lg md:text-xl italic font-semibold">
                    {`"Food should be eaten for health, taste should be secondary."`}
                  </p>
                  <p>
                    We source the highest-quality ingredients and make our
                    recipes from scratch every day using{" "}
                    <strong>preservative-free, natural ingredients</strong>. Our
                    thoughtfully crafted products—from InstaMix sachets to
                    mustard oil, bamboo shoot snacks, and brown rice—make you
                    feel nourished and energized.
                  </p>
                  <p>
                    The Northeastern states of India are home to{" "}
                    <strong>
                      more than a thousand undiscovered natural ingredients
                    </strong>{" "}
                    that hold immense nutritional value. This region is a living
                    treasure of health and taste, waiting to be shared with the
                    world. Sibuk is proudly{" "}
                    <strong>Made in Assam | Built for the World</strong>.
                  </p>
                </div>

                <div className="pt-2 md:pt-4">
                  <a
                    href="#"
                    className="inline-block text-turquiose-default underline hover:text-turquiose-default/60 transition-colors text-sm md:text-base"
                  >
                    PARTNER WITH US
                  </a>
                </div>
              </div>

              {/* Right - Large Circular Image with Decorative Elements */}
              <div className="relative order-1 lg:order-2">
                {/* Main Circular Image */}
                <div className="relative w-full aspect-square max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
                  {/* Outer Yellow Ring */}
                  <div className="absolute inset-0 rounded-full border-6 sm:border-8 border-yellow-400"></div>

                  {/* Inner Image */}
                  <div className="absolute inset-4 sm:inset-6 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src={farmImage}
                      alt="Our Food Philosophy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="hidden lg:block absolute -top-4 -right-8 xl:-top-5 xl:-right-10 w-24 h-24 xl:w-28 xl:h-28 opacity-90">
                  <Image
                    src={img1}
                    alt="Product"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="hidden 2xl:block absolute top-1/3 -right-16 w-32 h-32 xl:w-36 xl:h-36 opacity-90">
                  <Image
                    src={img1}
                    alt="Product"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
