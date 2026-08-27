import {
  ArrowLeft,
  ArrowRight,
  Check,
  Heart,
  MessageCircle,
  Minus,
  Plus,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { Link, useParams } from "react-router-dom"

function ProductDetails() {
  const { id } = useParams()

  // Demo product data
  // Later this data will come from your products.js / API
  const product = {
    id,
    name: "The Heritage Ivory Rug",
    category: "Hand Knotted Collection",
    price: "Price on Request",

    description:
      "A refined expression of traditional craftsmanship, The Heritage Ivory Rug combines subtle geometric detailing with a timeless neutral palette. Handcrafted for sophisticated interiors, it brings warmth, texture and understated luxury to any space.",

    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843f?auto=format&fit=crop&w=1600&q=90",

    images: [
      "https://images.unsplash.com/photo-1600166898405-da9535204843f?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=90",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=90",
    ],

    details: [
      ["Collection", "Heritage Collection"],
      ["Technique", "Hand Knotted"],
      ["Material", "Premium Wool & Silk"],
      ["Origin", "Bhadohi, India"],
      ["Pile", "Medium"],
      ["Shape", "Rectangle"],
    ],
  }

  return (
    <main className="bg-[#faf9f6] text-gray-900">


      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <section className="border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5">

          <div className="flex items-center gap-2 text-xs text-gray-500">

            <Link
              to="/"
              className="hover:text-amber-700 transition"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/products"
              className="hover:text-amber-700 transition"
            >
              Collections
            </Link>

            <span>/</span>

            <span className="text-gray-900">
              {product.name}
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT SECTION
      ====================================================== */}

      <section className="py-10 sm:py-14 lg:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">


            {/* =================================================
                PRODUCT IMAGES
            ================================================== */}

            <div>

              {/* Main Image */}

              <div className="relative bg-[#eeeae2] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover"
                />

                {/* Wishlist */}

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/95 flex items-center justify-center hover:bg-amber-700 hover:text-white transition"
                >
                  <Heart size={19} />
                </button>

              </div>


              {/* Thumbnail Images */}

              <div className="grid grid-cols-3 gap-3 mt-3">

                {product.images.map((image, index) => (

                  <button
                    key={image}
                    type="button"
                    className={`overflow-hidden border ${
                      index === 0
                        ? "border-amber-700"
                        : "border-transparent"
                    }`}
                  >

                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full aspect-square object-cover hover:scale-105 transition duration-500"
                    />

                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                PRODUCT INFORMATION
            ================================================== */}

            <div className="lg:pt-4">

              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
                {product.category}
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mt-4">
                {product.name}
              </h1>


              {/* Rating / status */}

              <div className="flex items-center gap-4 mt-5">

                <div className="flex items-center gap-1 text-amber-600">

                  <Sparkles size={16} />

                  <span className="text-xs uppercase tracking-wider">
                    Artisan Made
                  </span>

                </div>

                <span className="w-1 h-1 rounded-full bg-gray-300" />

                <span className="text-xs text-gray-500">
                  Made to Order
                </span>

              </div>


              {/* Price */}

              <div className="border-y border-gray-200 py-5 mt-7">

                <p className="font-serif text-2xl">
                  {product.price}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Contact us for current pricing and availability.
                </p>

              </div>


              {/* Description */}

              <p className="text-gray-600 leading-8 mt-7">
                {product.description}
              </p>


              {/* =================================================
                  SIZE
              ================================================== */}

              <div className="mt-8">

                <div className="flex items-center justify-between">

                  <p className="font-semibold text-sm">
                    Select Size
                  </p>

                  <button
                    type="button"
                    className="text-xs text-gray-500 underline hover:text-amber-700"
                  >
                    Size Guide
                  </button>

                </div>


                <div className="grid grid-cols-3 gap-3 mt-4">

                  {["5 × 8 ft", "6 × 9 ft", "8 × 10 ft"].map(
                    (size, index) => (

                      <button
                        key={size}
                        type="button"
                        className={`py-3 border text-sm transition ${
                          index === 0
                            ? "border-amber-700 bg-amber-50 text-amber-800"
                            : "border-gray-200 hover:border-gray-900"
                        }`}
                      >
                        {size}
                      </button>

                    )
                  )}

                </div>

              </div>


              {/* =================================================
                  QUANTITY
              ================================================== */}

              <div className="flex items-center justify-between mt-8">

                <p className="font-semibold text-sm">
                  Quantity
                </p>

                <div className="flex items-center border border-gray-200">

                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                  >
                    <Minus size={15} />
                  </button>

                  <span className="w-10 text-center text-sm">
                    1
                  </span>

                  <button
                    type="button"
                    aria-label="Increase quantity"
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                  >
                    <Plus size={15} />
                  </button>

                </div>

              </div>


              {/* =================================================
                  CTA BUTTONS
              ================================================== */}

              <div className="grid sm:grid-cols-2 gap-3 mt-8">

                <a
                  href="https://wa.me/919999999999"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#171513] text-white font-medium hover:bg-amber-700 transition"
                >
                  <MessageCircle size={18} />

                  Enquire on WhatsApp
                </a>


                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
                >
                  Request a Quote

                  <ArrowRight size={18} />

                </Link>

              </div>


              {/* =================================================
                  BENEFITS
              ================================================== */}

              <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-gray-200 mt-9">

                <div className="flex sm:block items-center gap-3 py-5 sm:pr-4">

                  <ShieldCheck
                    size={20}
                    className="text-amber-700 shrink-0"
                  />

                  <div>

                    <p className="text-sm font-semibold mt-0 sm:mt-3">
                      Quality Assured
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Carefully inspected
                    </p>

                  </div>

                </div>


                <div className="flex sm:block items-center gap-3 py-5 sm:px-4 border-t sm:border-t-0 sm:border-l border-gray-200">

                  <HandIcon />

                  <div>

                    <p className="text-sm font-semibold mt-0 sm:mt-3">
                      Handcrafted
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Made by artisans
                    </p>

                  </div>

                </div>


                <div className="flex sm:block items-center gap-3 py-5 sm:pl-4 border-t sm:border-t-0 sm:border-l border-gray-200">

                  <Ruler
                    size={20}
                    className="text-amber-700 shrink-0"
                  />

                  <div>

                    <p className="text-sm font-semibold mt-0 sm:mt-3">
                      Custom Sizes
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Made to your space
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCT DETAILS
      ====================================================== */}

      <section className="bg-[#f0ede6] py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">


            {/* Left */}

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
                Product Details
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl mt-4">
                Crafted with
                <br />
                <span className="italic">
                  intention.
                </span>
              </h2>

              <p className="text-gray-600 leading-8 mt-6 max-w-xl">
                Every detail of this piece has been thoughtfully
                considered, from the choice of material to the final
                finishing. Our carpets are created to become part of
                the spaces and stories they inhabit.
              </p>

            </div>


            {/* Specification */}

            <div>

              <div className="border-t border-gray-300">

                {product.details.map(([label, value]) => (

                  <div
                    key={label}
                    className="grid grid-cols-2 gap-5 py-5 border-b border-gray-300"
                  >

                    <span className="text-sm text-gray-500">
                      {label}
                    </span>

                    <span className="text-sm font-medium">
                      {value}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOMIZATION
      ====================================================== */}

      <section className="py-20 sm:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden bg-[#171513]">

            <div className="grid lg:grid-cols-2">

              <div className="min-h-[400px]">

                <img
                  src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=90"
                  alt="Luxury interior carpet"
                  className="w-full h-full object-cover"
                />

              </div>


              <div className="text-white flex items-center p-8 sm:p-12 lg:p-16">

                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
                    Bespoke Service
                  </p>

                  <h2 className="font-serif text-4xl sm:text-5xl mt-5">
                    Your space.
                    <br />
                    <span className="italic text-amber-200">
                      Your carpet.
                    </span>
                  </h2>

                  <p className="text-gray-400 leading-8 mt-6">
                    Need a different size, colour, pattern or material?
                    Our team can create a bespoke carpet designed
                    specifically for your project.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-amber-100 transition"
                  >
                    Discuss Custom Design

                    <ArrowRight size={17} />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BACK TO COLLECTION
      ====================================================== */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-amber-700 transition"
          >

            <ArrowLeft size={17} />

            Back to Collection

          </Link>

        </div>

      </section>

    </main>
  )
}


/*
  Small reusable icon component
  Keeps the main JSX clean.
*/
function HandIcon() {
  return (
    <div className="text-amber-700 shrink-0">

      <Check size={20} />

    </div>
  )
}

export default ProductDetails