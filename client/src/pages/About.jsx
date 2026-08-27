import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Gem,
  Hand,
  Leaf,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Hand,
    title: "Artisan Craftsmanship",
    description:
      "Every carpet is carefully crafted by skilled artisans who carry generations of weaving knowledge.",
  },
  {
    icon: Gem,
    title: "Exceptional Quality",
    description:
      "We focus on premium materials, refined finishing and meticulous attention to every detail.",
  },
  {
    icon: Leaf,
    title: "Thoughtful Materials",
    description:
      "Our collections are created with carefully selected natural and premium materials.",
  },
  {
    icon: Sparkles,
    title: "Timeless Design",
    description:
      "From heritage patterns to modern forms, every design is created to remain beautiful for years.",
  },
];

const process = [
  {
    number: "01",
    title: "Design",
    description:
      "Our design process begins with inspiration from heritage, architecture, nature and contemporary interiors.",
  },
  {
    number: "02",
    title: "Material",
    description:
      "We carefully select fibres, colours and textures to achieve the desired character and finish.",
  },
  {
    number: "03",
    title: "Weaving",
    description:
      "Skilled artisans transform each design into a carpet through traditional handcrafting techniques.",
  },
  {
    number: "04",
    title: "Finishing",
    description:
      "Each piece is inspected, finished and prepared to meet our standards before it reaches its new home.",
  },
];

function About() {
  return (
    <main className="bg-[#faf9f6] text-gray-900">
      {/* =====================================================
          HERO
      ====================================================== */}
  <section
  className="
    relative
    isolate
    m-0
    block
    overflow-hidden
    bg-[#171310]
    text-white
  "
>
  {/* =========================
      BACKGROUND IMAGE
  ========================== */}
  <img
    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
    alt="Luxury interior featuring a handcrafted carpet"
    className="
      absolute
      inset-0
      block
      h-full
      w-full
      object-cover
      object-center
    "
  />

  {/* =========================
      OVERLAYS
  ========================== */}

  <div className="absolute inset-0 bg-black/45" />

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/80
      via-black/50
      to-black/20
    "
  />

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/65
      via-transparent
      to-black/10
    "
  />

  {/* =========================
      CONTENT
  ========================== */}

  <div
    className="
      relative
      z-10
      m-0
      flex
      min-h-[calc(100svh-75px)]
      w-full
      items-center
      px-5
      py-16

      sm:min-h-[calc(100svh-83px)]
      sm:px-6
      sm:py-20

      lg:min-h-[calc(100svh-99px)]
      lg:px-8
      lg:py-20

      xl:px-12
    "
  >
    <div className="w-full max-w-3xl">

      {/* =========================
          EYEBROW
      ========================== */}
      <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
        <span className="h-px w-8 shrink-0 bg-amber-300 sm:w-10 lg:w-12" />

        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-amber-200

            sm:text-[10px]
            sm:tracking-[0.32em]

            lg:text-xs
            lg:tracking-[0.35em]
          "
        >
          The Velora Story
        </p>
      </div>

      {/* =========================
          HEADING
      ========================== */}
      <h1
        className="
          max-w-3xl
          font-serif
          font-medium
          leading-[0.92]
          tracking-[-0.025em]
          text-white

          text-[3.25rem]

          sm:text-6xl

          md:text-7xl

          lg:text-[76px]

          xl:text-[88px]
        "
      >
        More than
        <br />

        <span className="italic text-[#f3ca63]">
          a carpet.
        </span>
      </h1>

      {/* =========================
          DESCRIPTION
      ========================== */}
      <p
        className="
          mt-6
          max-w-xl
          text-sm
          leading-6
          text-white/80

          sm:mt-7
          sm:text-base
          sm:leading-7

          lg:mt-8
          lg:text-lg
          lg:leading-8
        "
      >
        We create handcrafted carpets that bring together the soul of
        Indian craftsmanship and the language of modern luxury.
      </p>

      {/* =========================
          DETAILS
      ========================== */}
      <div
        className="
          mt-6
          flex
          flex-wrap
          items-center
          gap-x-4
          gap-y-2
          text-[9px]
          uppercase
          tracking-[0.22em]
          text-white/55

          sm:mt-7
          sm:text-[10px]
          sm:tracking-[0.25em]

          lg:mt-8
        "
      >
        <span>Handcrafted</span>

        <span className="h-1 w-1 rounded-full bg-amber-300/70" />

        <span>Timeless Design</span>

        <span className="h-1 w-1 rounded-full bg-amber-300/70" />

        <span>Made in India</span>
      </div>
    </div>
  </div>

  {/* =========================
      DECORATIVE CIRCLES
  ========================== */}

  <div
    className="
      pointer-events-none
      absolute
      -right-40
      top-1/2
      hidden
      h-[520px]
      w-[520px]
      -translate-y-1/2
      rounded-full
      border
      border-white/[0.08]
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-16
      top-1/2
      hidden
      h-[350px]
      w-[350px]
      -translate-y-1/2
      rounded-full
      border
      border-amber-300/[0.12]
      lg:block
    "
  />
</section>
      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600166898405-da9535204843f?auto=format&fit=crop&w=1200&q=90"
                alt="Handcrafted luxury carpet"
                className="w-full h-[500px] sm:h-[600px] object-cover"
              />

              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white shadow-xl px-7 py-6">
                <p className="font-serif text-3xl">Since 1995</p>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-2">
                  A tradition of craft
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
                Who We Are
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mt-5">
                Rooted in
                <br />
                <span className="italic">craftsmanship.</span>
              </h2>

              <p className="text-gray-600 leading-8 mt-7">
                Velora Carpets was created with a simple belief: a beautifully
                crafted carpet can transform the character of an entire space.
              </p>

              <p className="text-gray-600 leading-8 mt-5">
                Our collections celebrate the rich tradition of Indian carpet
                making while embracing the refined aesthetics of contemporary
                interiors.
              </p>

              <p className="text-gray-600 leading-8 mt-5">
                Every piece is designed with intention and brought to life
                through the patience, skill and experience of artisans who
                understand that true luxury lies in the details.
              </p>

              <a
                href="#craftsmanship"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold border-b border-gray-900 pb-2 hover:text-amber-700 hover:border-amber-700 transition"
              >
                Discover our craftsmanship
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="bg-[#171513] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="py-10 sm:py-12 text-center border-r border-white/10">
              <p className="font-serif text-4xl sm:text-5xl">30+</p>

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">
                Years of Craft
              </p>
            </div>

            <div className="py-10 sm:py-12 text-center lg:border-r border-white/10">
              <p className="font-serif text-4xl sm:text-5xl">100%</p>

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">
                Handcrafted
              </p>
            </div>

            <div className="py-10 sm:py-12 text-center border-r border-white/10">
              <p className="font-serif text-4xl sm:text-5xl">25+</p>

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">
                Markets Served
              </p>
            </div>

            <div className="py-10 sm:py-12 text-center">
              <p className="font-serif text-4xl sm:text-5xl">5K+</p>

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">
                Rugs Crafted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
              What We Believe
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl mt-4">
              The values behind
              <br />
              <span className="italic">every piece.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="bg-[#faf9f6] p-7 sm:p-8 lg:p-9"
                >
                  <div className="w-12 h-12 rounded-full bg-[#eee9df] flex items-center justify-center text-amber-700">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif text-2xl mt-7">{value.title}</h3>

                  <p className="text-sm text-gray-500 leading-7 mt-4">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CRAFTSMANSHIP
      ====================================================== */}
      <section
        id="craftsmanship"
        className="bg-[#f0ede6] py-20 sm:py-28 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
                The Art of Making
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mt-5">
                Made slowly.
                <br />
                <span className="italic">Made beautifully.</span>
              </h2>

              <p className="text-gray-600 leading-8 mt-7">
                True craftsmanship cannot be rushed. From the first concept to
                the final finishing, every stage receives careful attention from
                experienced hands.
              </p>

              <div className="space-y-7 mt-10">
                {process.map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <span className="font-serif text-2xl text-amber-700 shrink-0">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>

                      <p className="text-sm text-gray-500 leading-7 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="order-1 lg:order-2 relative">
              <img
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=90"
                alt="Elegant interior with luxury carpet"
                className="w-full h-[520px] sm:h-[650px] object-cover"
              />

              <div className="absolute -bottom-6 -left-4 sm:-left-8 w-44 sm:w-52 h-56 sm:h-64 overflow-hidden border-8 border-[#f0ede6]">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=90"
                  alt="Luxury interior detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTISAN SECTION
      ====================================================== */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-[#171513]">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="min-h-[400px] lg:min-h-[560px]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90"
                  alt="Luxury living room with premium carpet"
                  className="w-full h-[500px] sm:h-[600px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex items-center px-7 sm:px-12 lg:px-16 py-14 sm:py-16 lg:py-20 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                    Our Artisans
                  </p>

                  <h2 className="font-serif text-4xl sm:text-5xl leading-tight mt-5">
                    Hands that
                    <br />
                    <span className="italic text-amber-200">tell stories.</span>
                  </h2>

                  <p className="text-gray-400 leading-8 mt-7">
                    Behind every Velora carpet is an artisan whose knowledge has
                    been shaped by years of practice. Their hands transform
                    simple materials into pieces of enduring beauty.
                  </p>

                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-3">
                      <Check className="text-amber-400" size={18} />
                      <span className="text-sm text-gray-300">
                        Traditional weaving techniques
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Check className="text-amber-400" size={18} />
                      <span className="text-sm text-gray-300">
                        Carefully selected materials
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Check className="text-amber-400" size={18} />
                      <span className="text-sm text-gray-300">
                        Detailed quality inspection
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOM CTA
      ====================================================== */}
      <section className="px-5 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#b27a35] text-white text-center px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-100">
              Work With Us
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-5">
              Let's create something
              <br />
              <span className="italic">extraordinary.</span>
            </h2>

            <p className="max-w-xl mx-auto text-sm sm:text-base text-white/80 leading-7 mt-6">
              Whether you're furnishing a private residence, hotel, showroom or
              commercial space, our team can help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </a>

              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/60 rounded-full font-medium hover:bg-white hover:text-gray-900 transition"
              >
                Explore Collection
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
