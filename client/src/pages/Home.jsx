import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Star,
} from "lucide-react"

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"

const collections = [
  {
    title: "Hand Knotted",
    description: "Timeless pieces crafted by skilled artisans.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Modern Collection",
    description: "Contemporary designs for refined interiors.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Traditional Rugs",
    description: "Heritage-inspired patterns with lasting beauty.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
]

const products = [
  {
    name: "Heritage Ivory",
    category: "Hand Knotted",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Persian Garden",
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Modern Earth",
    category: "Contemporary",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Royal Sand",
    category: "Luxury Collection",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  },
]

function ImageWithFallback({
  src,
  alt,
  className,
}) {
  const handleError = (event) => {
    if (event.currentTarget.src !== FALLBACK_IMAGE) {
      event.currentTarget.src = FALLBACK_IMAGE
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      loading="lazy"
      decoding="async"
      className={className}
    />
  )
}

function Home() {
  return (
    <main className="bg-[#faf9f6] text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury handcrafted carpet in elegant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl text-white">

            <p className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-amber-200 mb-6">
              <span className="w-10 h-px bg-amber-300" />
              Crafted in Bhadohi
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] font-medium">
              Art beneath
              <br />
              <span className="italic text-amber-200">
                your feet.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg leading-8 text-gray-200">
              Discover handcrafted carpets where generations of
              craftsmanship meet timeless contemporary design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-amber-100 transition"
              >
                Explore Collection
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/60 text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition"
              >
                Request a Quote
                <ArrowUpRight size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="w-px h-10 bg-white/50" />
        </div>
      </section>


      {/* =====================================================
          TRUST BAR
      ====================================================== */}
      <section className="bg-[#171513] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">

            <div className="py-7 px-5 text-center">
              <p className="font-serif text-3xl">30+</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                Years of Craft
              </p>
            </div>

            <div className="py-7 px-5 text-center">
              <p className="font-serif text-3xl">100%</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                Handcrafted
              </p>
            </div>

            <div className="py-7 px-5 text-center">
              <p className="font-serif text-3xl">25+</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                Countries Served
              </p>
            </div>

            <div className="py-7 px-5 text-center">
              <p className="font-serif text-3xl">5K+</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                Rugs Crafted
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section
        id="about"
        className="py-20 sm:py-28 lg:py-32 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            <div className="relative">

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"
                alt="Elegant luxury interior with carpet"
                className="w-full h-[450px] sm:h-[550px] object-cover"
              />

              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white shadow-xl p-6 sm:p-8 max-w-[230px]">
                <p className="font-serif text-3xl text-amber-700">
                  Since 1995
                </p>

                <p className="text-sm text-gray-500 mt-2 leading-6">
                  Preserving the art of Indian carpet weaving.
                </p>
              </div>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
                The Velora Story
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mt-5">
                Woven with
                <br />
                <span className="italic">
                  purpose.
                </span>
              </h2>

              <p className="mt-7 text-gray-600 leading-8">
                At Velora Carpets, every rug tells a story. Our collections
                bring together traditional Indian craftsmanship and
                sophisticated modern design to create pieces made to last
                for generations.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                From the first sketch to the final knot, each carpet passes
                through skilled hands that understand the beauty of patience,
                detail and authenticity.
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
          COLLECTIONS
      ====================================================== */}
      <section
        id="collections"
        className="py-20 sm:py-28 bg-[#f1eee7] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
                Explore
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl mt-4">
                Our Collections
              </h2>
            </div>

            <a
              href="#products"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-amber-700 transition"
            >
              View all collections
              <ArrowRight size={17} />
            </a>

          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-7">

            {collections.map((collection) => (
              <a
                href="#products"
                key={collection.title}
                className="group relative h-[430px] overflow-hidden"
              >

                <ImageWithFallback
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                  <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
                    Collection
                  </p>

                  <h3 className="font-serif text-3xl mt-2">
                    {collection.title}
                  </h3>

                  <p className="text-sm text-gray-200 mt-2 max-w-xs">
                    {collection.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm mt-5 group-hover:text-amber-200 transition">
                    Explore
                    <ArrowRight size={16} />
                  </span>

                </div>

              </a>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}
      <section
        id="products"
        className="py-20 sm:py-28 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
              Curated Selection
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl mt-4">
              Pieces worth keeping
            </h2>

            <p className="text-gray-500 leading-7 mt-5">
              Explore a selection of handcrafted designs created to bring
              warmth, character and timeless elegance to your space.
            </p>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            {products.map((product) => (
              <div
                key={product.name}
                className="group"
              >

                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">

                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <button
                    type="button"
                    aria-label={`View ${product.name}`}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300"
                  >
                    <ArrowUpRight size={17} />
                  </button>

                </div>

                <div className="pt-4">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-700">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-xl mt-1">
                    {product.name}
                  </h3>

                  <button
                    type="button"
                    className="text-xs uppercase tracking-widest text-gray-500 mt-3 hover:text-amber-700 transition"
                  >
                    Enquire →
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          CRAFTSMANSHIP
      ====================================================== */}
      <section
        id="craftsmanship"
        className="py-20 sm:py-28 bg-[#171513] text-white scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                The Art of Making
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mt-5">
                Every knot
                <br />
                <span className="italic text-amber-200">
                  matters.
                </span>
              </h2>

              <p className="text-gray-400 leading-8 mt-7 max-w-xl">
                Our artisans combine traditional techniques with refined
                design to create carpets that are as distinctive as the
                spaces they inhabit.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-9">

                {[
                  "Natural & premium materials",
                  "Skilled Indian artisans",
                  "Custom sizes & designs",
                  "Quality checked by hand",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <div className="w-6 h-6 rounded-full bg-amber-700/20 flex items-center justify-center shrink-0">
                      <Check
                        size={14}
                        className="text-amber-400"
                      />
                    </div>

                    <span className="text-sm text-gray-300">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div className="relative">

              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Luxury interior showcasing handcrafted carpet"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-amber-700 px-7 py-5">

                <p className="font-serif text-3xl">
                  100%
                </p>

                <p className="text-xs uppercase tracking-widest mt-1">
                  Handcrafted
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}
      <section className="py-20 sm:py-28">

        <div className="max-w-4xl mx-auto px-5 text-center">

          <div className="flex justify-center gap-1 text-amber-600">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                fill="currentColor"
              />
            ))}
          </div>

          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mt-7">
            “A carpet is not simply something you place in a room.
            <span className="italic">
              {" "}It becomes part of the room's story.
            </span>
            ”
          </blockquote>

          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mt-8">
            — Velora Carpets
          </p>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section
        id="contact"
        className="px-5 sm:px-6 lg:px-8 pb-20 sm:pb-28 scroll-mt-20"
      >

        <div className="max-w-7xl mx-auto relative overflow-hidden bg-[#b27a35]">

          <div className="relative px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 text-center text-white">

            <p className="text-xs uppercase tracking-[0.3em] text-amber-100">
              Begin Your Journey
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-5">
              Find the rug that
              <br />
              <span className="italic">
                feels like yours.
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-sm sm:text-base text-white/80 leading-7 mt-6">
              Tell us about your space, preferred style and requirements.
              Our team will help you find the perfect piece.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Request a Quote
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/60 rounded-full font-medium hover:bg-white hover:text-gray-900 transition"
              >
                WhatsApp Us
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>
        </div>

      </section>

    </main>
  )
}

export default Home