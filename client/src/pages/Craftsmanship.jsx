import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Hand,
  Leaf,
  Ruler,
  Sparkles,
} from "lucide-react";

const craftsmanshipSteps = [
  {
    number: "01",
    title: "Design & Inspiration",
    description:
      "Every Velora carpet begins with an idea inspired by Indian heritage, architecture, nature and contemporary interiors.",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Hand Selection",
    description:
      "Our artisans carefully select premium natural fibres and materials according to the character, texture and purpose of every design.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "The Art of Knotting",
    description:
      "Skilled craftsmen create each carpet knot by knot, combining generations of knowledge with remarkable attention to detail.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Finishing & Inspection",
    description:
      "Each finished piece is carefully washed, trimmed and inspected to ensure exceptional texture, consistency and lasting beauty.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
];

const values = [
  {
    icon: Hand,
    title: "Handcrafted",
    description:
      "Made by skilled artisans rather than mass-produced by machines.",
  },
  {
    icon: Sparkles,
    title: "Exceptional Detail",
    description: "Every pattern, knot and finish is carefully considered.",
  },
  {
    icon: Leaf,
    title: "Thoughtful Materials",
    description:
      "We value beautiful materials chosen for comfort and longevity.",
  },
  {
    icon: Ruler,
    title: "Made With Precision",
    description:
      "Consistent craftsmanship from the first sketch to final inspection.",
  },
];

function Craftsmanship() {
  return (
    <main className="bg-[#f6f3ed] text-[#111827]">
      {/* =====================================================
    HERO
===================================================== */}
<section
  className="
    relative
    isolate
    m-0
    block
    overflow-hidden
    bg-[#1C1713]
    text-white
  "
>
  {/* =========================
      BACKGROUND IMAGE
  ========================== */}
  <img
    src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=2400&q=90"
    alt="Luxury handcrafted carpet"
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

  <div className="absolute inset-0 bg-black/50" />

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
      DECORATIVE CIRCLES
  ========================== */}

  <div
    className="
      pointer-events-none
      absolute
      -right-36
      top-1/2
      hidden
      h-[480px]
      w-[480px]
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
      -right-14
      top-1/2
      hidden
      h-[320px]
      w-[320px]
      -translate-y-1/2
      rounded-full
      border
      border-[#d6a43a]/[0.12]
      lg:block
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
      min-h-[calc(100svh-125px)]
      w-full
      items-center
      px-5
      py-14

      sm:min-h-[calc(100svh-135px)]
      sm:px-6
      sm:py-16

      lg:min-h-[calc(100svh-155px)]
      lg:px-8
      lg:py-16

      xl:px-12
    "
  >
    <div className="w-full max-w-3xl">

      {/* EYEBROW */}

      <div
        className="
          mb-5
          flex
          items-center
          gap-3

          sm:mb-6
          sm:gap-4
        "
      >
        <span
          className="
            h-px
            w-8
            shrink-0
            bg-[#e3b54d]

            sm:w-10

            lg:w-12
          "
        />

        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-[#e5b84f]

            sm:text-[10px]
            sm:tracking-[0.32em]

            lg:text-xs
            lg:tracking-[0.35em]
          "
        >
          The Art of Making
        </p>
      </div>

      {/* HEADING */}

      <h1
        className="
          max-w-3xl
          font-serif
          font-medium
          leading-[0.92]
          tracking-[-0.025em]
          text-white

          text-[3.1rem]

          sm:text-6xl

          md:text-7xl

          lg:text-[72px]

          xl:text-[84px]
        "
      >
        Every knot
        <br />

        <span className="italic text-[#f3ca63]">
          matters.
        </span>
      </h1>

      {/* DESCRIPTION */}

      <p
        className="
          mt-5
          max-w-xl
          text-sm
          leading-6
          text-white/80

          sm:mt-6
          sm:text-base
          sm:leading-7

          lg:mt-7
          lg:text-lg
          lg:leading-8
        "
      >
        Behind every Velora carpet is a story of patience,
        precision and generations of Indian craftsmanship.
      </p>

      {/* BUTTONS */}

      <div
        className="
          mt-6
          flex
          flex-col
          gap-3

          sm:mt-7
          sm:flex-row
          sm:items-center
        "
      >
        <Link
          to="/products"
          className="
            group
            inline-flex
            min-h-[46px]
            items-center
            justify-center
            gap-3
            rounded-full
            bg-white
            px-5
            py-2.5
            text-sm
            font-semibold
            text-[#1C1713]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#e7bb50]
            hover:shadow-lg
            hover:shadow-[#e7bb50]/10

            sm:min-h-[50px]
            sm:px-6
          "
        >
          <span>Explore Our Collection</span>

          <ArrowRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>

        <Link
          to="/contact"
          className="
            group
            inline-flex
            min-h-[46px]
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-white/25
            bg-white/[0.03]
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#e7bb50]/60
            hover:bg-[#e7bb50]/10
            hover:text-[#f1c85b]

            sm:min-h-[50px]
            sm:px-6
          "
        >
          <span>Request a Quote</span>

          <ChevronRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* PREMIUM DETAILS */}

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

        <span className="h-1 w-1 rounded-full bg-[#d6a43a]/70" />

        <span>Timeless Design</span>

        <span className="h-1 w-1 rounded-full bg-[#d6a43a]/70" />

        <span>Made in India</span>
      </div>
    </div>
  </div>

  {/* DISCOVER */}

  <div
    className="
      absolute
      bottom-6
      right-8
      hidden
      items-center
      gap-3
      lg:flex
      xl:right-12
    "
  >
    <span
      className="
        text-[8px]
        uppercase
        tracking-[0.3em]
        text-white/35
      "
    >
      Discover
    </span>

    <span className="h-px w-9 bg-white/20" />
  </div>
</section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b86618]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b86618]">
                Crafted in India
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-[#111827] sm:text-5xl md:text-6xl">
              Where tradition
              <br />
              <span className="italic">meets artistry.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-gray-600 md:text-lg">
              A truly exceptional carpet cannot be rushed. It is shaped by
              thoughtful design, carefully selected materials and the steady
              hands of experienced artisans.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
              Our approach brings together centuries-old Indian techniques with
              refined contemporary design, creating pieces that feel timeless in
              both traditional and modern spaces.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE IMAGE
      ====================================================== */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
            alt="Luxury carpet in an elegant interior"
            className="h-[420px] w-full object-cover sm:h-[520px] md:h-[620px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-2xl p-7 sm:p-10 md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e9bd55]">
              Made to be lived with
            </p>

            <h3 className="mt-4 font-serif text-3xl text-white sm:text-4xl md:text-5xl">
              Beauty that becomes part of your home.
            </h3>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="bg-[#11100e] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8a43b]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e1b64e]">
                Our Process
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              From the first idea
              <br />
              <span className="italic text-[#e7bf5b]">to the final knot.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              Every Velora carpet passes through a carefully considered process
              designed to preserve the character of handmade craftsmanship.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {craftsmanshipSteps.map((step) => (
              <article
                key={step.number}
                className="group overflow-hidden border border-white/10 bg-white/[0.03]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />

                  <span className="absolute left-5 top-5 font-serif text-3xl text-[#e7bf5b]">
                    {step.number}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b86618]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b86618]">
                Our Promise
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              The details make
              <br />
              <span className="italic">the difference.</span>
            </h2>
          </div>

          <div className="mt-14 grid border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="border-b border-r border-gray-200 p-7 sm:p-8 md:p-10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eee9df] text-[#b86618]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-7 font-serif text-2xl text-[#111827]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE BANNER
      ====================================================== */}
      <section className="relative overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=90"
          alt="Elegant luxury interior with handcrafted rug"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 md:py-32 lg:px-12 lg:py-40">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e8bd56]">
            A Legacy of Craft
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Made by hands.
            <br />
            <span className="italic text-[#edc65c]">Made to last.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Discover carpets created with patience, skill and a deep respect for
            the art of Indian carpet making.
          </p>

          <Link
            to="/products"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-900 transition duration-300 hover:bg-[#e7b94d]"
          >
            Discover the Collection
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* =====================================================
          QUALITY CHECK
      ====================================================== */}
      <section className="bg-[#eee9df] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b86618]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b86618]">
                Quality, Always
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Nothing leaves our
              <br />
              <span className="italic">studio by chance.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {[
              "Carefully inspected craftsmanship",
              "Premium materials and considered construction",
              "Attention to colour, texture and finishing",
              "Designed for timeless interiors",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border-b border-gray-300 pb-5"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b86618] text-white">
                  <Check size={14} />
                </div>

                <p className="text-base leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#11100e] px-5 py-20 text-center text-white sm:px-8 md:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e7bd55]">
            Bring craftsmanship home
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Find a carpet that
            <br />
            <span className="italic text-[#e7bd55]">tells your story.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Explore our handcrafted collections or speak with our team about a
            custom carpet for your space.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-[#e7b94d]"
            >
              Explore Collection
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Craftsmanship;
