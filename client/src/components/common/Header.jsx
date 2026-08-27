import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react"

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileOpen(false)
    setIsCollectionsOpen(false)
  }

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-amber-700"
        : "text-gray-700 hover:text-amber-700"
    }`

  const collectionLinks = [
    {
      name: "All Collections",
      category: "all",
    },
    {
      name: "Handmade Rugs",
      category: "handmade",
    },
    {
      name: "Modern Rugs",
      category: "modern",
    },
    {
      name: "Traditional Rugs",
      category: "traditional",
    },
    {
      name: "Luxury Collection",
      category: "luxury",
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-xl font-serif text-white">
              V
            </div>

            <div>
              <h1 className="font-serif text-xl font-semibold tracking-wide text-gray-900 sm:text-2xl">
                Velora  Rugs
              </h1>

              <p className="text-[9px] uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
                Handcrafted Carpets
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* ================= COLLECTIONS ================= */}
            <div
              className="relative"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setIsCollectionsOpen((prev) => !prev)
                }
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  isCollectionsOpen
                    ? "text-amber-700"
                    : "text-gray-700 hover:text-amber-700"
                }`}
                aria-expanded={isCollectionsOpen}
              >
                Collections

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isCollectionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {isCollectionsOpen && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-2xl">

                    {collectionLinks.map((item) => (
                      <Link
                        key={item.category}
                        to={
                          item.category === "all"
                            ? "/products"
                            : `/products?category=${item.category}`
                        }
                        onClick={() =>
                          setIsCollectionsOpen(false)
                        }
                        className="group flex items-center justify-between border-b border-gray-100 px-5 py-4 text-sm text-gray-600 last:border-b-0 hover:bg-amber-50 hover:text-amber-700"
                      >
                        <span>{item.name}</span>

                        <ArrowUpRight
                          size={15}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </div>

            <Link
              to="/craftsmanship"
              className={navLinkClass}
            >
              Craftsmanship
            </Link>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden items-center gap-4 lg:flex">

            <a
              href="tel:+917068301482"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-amber-700"
            >
              <Phone
                size={17}
                className="text-amber-700"
              />

              <span>+91 7068301482</span>
            </a>

            <Link
              to="/contact"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-amber-700"
            >
              Enquire Now
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() =>
              setIsMobileOpen((prev) => !prev)
            }
            className="rounded-lg p-2 text-gray-800 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X size={27} />
            ) : (
              <Menu size={27} />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMobileOpen && (
          <div className="border-t border-gray-100 py-5 lg:hidden">

            <nav className="flex flex-col">

              <Link
                to="/"
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700"
              >
                About Us
              </Link>

              {/* MOBILE COLLECTIONS */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setIsCollectionsOpen((prev) => !prev)
                  }
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                >
                  <span>Collections</span>

                  <ChevronDown
                    size={17}
                    className={`transition-transform ${
                      isCollectionsOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {isCollectionsOpen && (
                  <div className="ml-3 border-l border-amber-200 pl-3">

                    {collectionLinks.map((item) => (
                      <Link
                        key={item.category}
                        to={
                          item.category === "all"
                            ? "/products"
                            : `/products?category=${item.category}`
                        }
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-700"
                      >
                        {item.name}
                      </Link>
                    ))}

                  </div>
                )}
              </div>

              <Link
                to="/craftsmanship"
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700"
              >
                Craftsmanship
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700"
              >
                Contact
              </Link>

              {/* Mobile Phone */}
              <a
                href="tel:+917068301482"
                className="mt-3 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-medium text-gray-700"
              >
                <Phone
                  size={17}
                  className="text-amber-700"
                />

                +91 7068301482
              </a>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="mt-3 rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-amber-700"
              >
                Enquire Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header