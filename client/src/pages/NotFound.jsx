import { ArrowLeft, ArrowRight, Home, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="min-h-[75vh] bg-[#faf9f6] text-gray-900">

      {/* =====================================================
          404 HERO
      ====================================================== */}

      <section className="relative min-h-[75vh] overflow-hidden flex items-center">

        {/* Background Image */}

        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60" />


        {/* Content */}

        <div className="relative w-full">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

            <div className="max-w-2xl text-white">

              {/* Small Label */}

              <div className="flex items-center gap-3">

                <Sparkles
                  size={16}
                  className="text-amber-300"
                />

                <p className="text-xs uppercase tracking-[0.35em] text-amber-200">
                  Velora Carpets
                </p>

              </div>


              {/* 404 */}

              <p className="font-serif text-[110px] sm:text-[150px] lg:text-[190px] leading-none mt-5 text-white/90">
                404
              </p>


              {/* Heading */}

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight -mt-3">
                This page has
                <br />

                <span className="italic text-amber-200">
                  wandered away.
                </span>
              </h1>


              {/* Description */}

              <p className="max-w-xl text-gray-200 text-sm sm:text-base leading-7 mt-6">
                The page you're looking for may have moved, been removed,
                or perhaps it was never woven into our collection.
              </p>


              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-amber-100 transition duration-300"
                >

                  <Home size={17} />

                  Back to Home

                </Link>


                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/60 text-white rounded-full text-sm font-medium hover:bg-white hover:text-gray-900 transition duration-300"
                >

                  Explore Collection

                  <ArrowRight size={17} />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM NAVIGATION
      ====================================================== */}

      <section className="border-t border-gray-200 bg-[#faf9f6]">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-700 transition"
          >

            <ArrowLeft size={16} />

            Return to Velora Carpets

          </Link>

        </div>

      </section>

    </main>
  )
}

export default NotFound