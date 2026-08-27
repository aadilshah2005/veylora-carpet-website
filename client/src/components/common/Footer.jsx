import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#171513] text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-amber-700 flex items-center justify-center">
                <span className="font-serif text-xl">V</span>
              </div>

              <div>
                <h2 className="text-xl font-serif font-semibold tracking-wide">
                  Velora Carpets
                </h2>

                <p className="text-[10px] text-gray-400 tracking-[0.25em] uppercase">
                  Handcrafted Carpets
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-7 text-gray-400 max-w-sm">
              Discover timeless handcrafted carpets, thoughtfully designed and
              woven with generations of traditional craftsmanship.
            </p>

            {/* ================= SOCIAL ================= */}
            <div className="flex items-center gap-3 mt-6">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-semibold hover:bg-amber-700 hover:border-amber-700 transition duration-300"
              >
                IG
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-semibold hover:bg-amber-700 hover:border-amber-700 transition duration-300"
              >
                f
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-semibold hover:bg-amber-700 hover:border-amber-700 transition duration-300"
              >
                in
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-amber-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-amber-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#collections"
                  className="hover:text-amber-500 transition"
                >
                  Our Collections
                </a>
              </li>

              <li>
                <a
                  href="#craftsmanship"
                  className="hover:text-amber-500 transition"
                >
                  Craftsmanship
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-amber-500 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COLLECTIONS ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5">
              Collections
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Handmade Rugs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Modern Rugs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Traditional Rugs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Custom Rugs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Luxury Collection
                </a>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5">
              Get In Touch
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-600 mt-1 shrink-0" />

                <p className="text-sm leading-6 text-gray-400">
                  Bhadohi, Uttar Pradesh,
                  <br />
                  India
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+91 70683 01482"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-amber-500 transition"
              >
                <Phone size={17} className="text-amber-600" />
                +91 70683 01482
              </a>

              {/* Email */}
              <a
                href="mailto:veloratechhq@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-amber-500 transition"
              >
                <Mail size={17} className="text-amber-600" />
                veloratechhq@gmail.com
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-amber-700 hover:bg-amber-600 rounded-full text-sm font-medium transition duration-300"
            >
              Request a Quote
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            {/* Copyright */}
            <p>© 2026 Velora Carpets. All rights reserved.</p>

            {/* Legal Links */}
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
