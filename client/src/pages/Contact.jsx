import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

function Contact() {
  return (
    <main className="bg-[#faf9f6] text-gray-900">
      {/* =====================================================
          HERO
      ====================================================== */}

    <section
  className="
    relative
    isolate
    overflow-hidden
    bg-[#211A15]
    text-white

    min-h-[440px]
    sm:min-h-[480px]
    lg:min-h-[510px]
  "
>
  {/* =========================
      PREMIUM BACKGROUND
  ========================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-br
      from-[#30241C]
      via-[#211A15]
      to-[#120E0B]
    "
  />

  {/* Subtle luxury texture */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-30
      bg-[radial-gradient(circle_at_75%_50%,rgba(214,164,58,0.10),transparent_32%)]
    "
  />

  {/* Large decorative circle */}
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
      border-white/[0.05]
      lg:block
    "
  />

  {/* Gold circle */}
  <div
    className="
      pointer-events-none
      absolute
      -right-16
      top-1/2
      hidden
      h-[340px]
      w-[340px]
      -translate-y-1/2
      rounded-full
      border
      border-amber-400/[0.13]
      lg:block
    "
  />

  {/* Gold glow */}
  <div
    className="
      pointer-events-none
      absolute
      right-[18%]
      top-[18%]
      hidden
      h-40
      w-40
      rounded-full
      bg-amber-400/[0.04]
      blur-3xl
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
      mx-auto
      flex
      min-h-[440px]
      max-w-7xl
      items-center
      px-5
      py-14

      sm:min-h-[480px]
      sm:px-6
      sm:py-16

      lg:min-h-[510px]
      lg:px-8
      lg:py-20

      xl:px-12
    "
  >
    <div className="w-full max-w-4xl">

      {/* Eyebrow */}
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
            bg-amber-400

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
            text-amber-300

            sm:text-[10px]
            sm:tracking-[0.32em]

            lg:text-xs
            lg:tracking-[0.35em]
          "
        >
          Get In Touch
        </p>
      </div>

      {/* Heading */}
      <h1
        className="
          max-w-4xl
          font-serif
          font-medium
          leading-[0.94]
          tracking-[-0.025em]

          text-[3rem]

          sm:text-5xl

          md:text-6xl

          lg:text-[72px]

          xl:text-[82px]
        "
      >
        Let's create
        <br />

        <span className="italic text-[#f3ca63]">
          something beautiful.
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-2xl
          text-sm
          leading-6
          text-white/70

          sm:mt-7
          sm:text-base
          sm:leading-7

          lg:mt-8
          lg:text-lg
          lg:leading-8
        "
      >
        Tell us about your space, project or carpet requirements. Our team
        will help you find or create the perfect piece.
      </p>

      {/* Contact details */}
      <div
        className="
          mt-6
          flex
          flex-wrap
          items-center
          gap-x-5
          gap-y-2

          text-[9px]
          uppercase
          tracking-[0.22em]
          text-white/45

          sm:mt-7
          sm:text-[10px]
          sm:tracking-[0.25em]
        "
      >
        <span>Bhadohi, India</span>

        <span className="h-1 w-1 rounded-full bg-amber-400/60" />

        <span>Private Consultation</span>

        <span className="h-1 w-1 rounded-full bg-amber-400/60" />

        <span>Custom Carpets</span>
      </div>

    </div>
  </div>

  {/* =========================
      BOTTOM ACCENT
  ========================== */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      h-px
      w-full
      bg-gradient-to-r
      from-transparent
      via-amber-400/25
      to-transparent
    "
  />
</section>

      {/* =====================================================
          CONTACT INFORMATION + FORM
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
                Start a Conversation
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl mt-4">
                We'd love to
                <br />
                <span className="italic">hear from you.</span>
              </h2>

              <p className="text-gray-600 leading-7 mt-6 max-w-md">
                Whether you're looking for a single statement rug or planning a
                larger hospitality or interior project, we're here to help.
              </p>

              {/* Contact Details */}

              <div className="space-y-6 mt-10">
                {/* Location */}

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#eee9df] flex items-center justify-center shrink-0">
                    <MapPin size={19} className="text-amber-700" />
                  </div>

                  <div>
                    <p className="font-semibold">Visit Us</p>

                    <p className="text-sm text-gray-500 leading-6 mt-1">
                      Bhadohi, Uttar Pradesh,
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#eee9df] flex items-center justify-center shrink-0">
                    <Phone size={19} className="text-amber-700" />
                  </div>

                  <div>
                    <p className="font-semibold">Call Us</p>

                    <a
                      href="tel:+917068301482"
                      className="text-sm text-gray-500 mt-1 inline-block hover:text-amber-700 transition"
                    >
                      +91 7068301482
                    </a>
                  </div>
                </div>

                {/* Email */}

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#eee9df] flex items-center justify-center shrink-0">
                    <Mail size={19} className="text-amber-700" />
                  </div>

                  <div>
                    <p className="font-semibold">Email Us</p>

                    <a
                      href="mailto:info@veloracarpets.com"
                      className="text-sm text-gray-500 mt-1 inline-block hover:text-amber-700 transition"
                    >
                      info@veloracarpets.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#eee9df] flex items-center justify-center shrink-0">
                    <Clock3 size={19} className="text-amber-700" />
                  </div>

                  <div>
                    <p className="font-semibold">Working Hours</p>

                    <p className="text-sm text-gray-500 leading-6 mt-1">
                      Monday – Saturday
                      <br />
                      10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-6 py-3.5 rounded-full bg-[#171513] text-white hover:bg-amber-700 transition duration-300"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* =================================================
                ENQUIRY FORM
            ================================================== */}

            <div className="bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-700 font-medium">
                  Enquiry Form
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl mt-3">
                  Tell us about your project
                </h2>

                <p className="text-sm text-gray-500 mt-3">
                  Fill in the details below and our team will get back to you.
                </p>
              </div>

              <form className="space-y-6">
                {/* Name + Company */}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition"
                    />
                  </div>
                </div>

                {/* Email + Phone */}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      required
                      className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition"
                    />
                  </div>
                </div>

                {/* Project Type */}

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium mb-2"
                  >
                    Project Type
                  </label>

                  <select
                    id="project"
                    name="project"
                    defaultValue=""
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition text-gray-600"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>

                    <option value="residential">Residential</option>

                    <option value="hotel">Hotel / Hospitality</option>

                    <option value="commercial">Commercial</option>

                    <option value="interior">Interior Design Project</option>

                    <option value="retail">Retail / Showroom</option>

                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Carpet Requirement */}

                <div>
                  <label
                    htmlFor="requirement"
                    className="block text-sm font-medium mb-2"
                  >
                    Carpet Requirement
                  </label>

                  <select
                    id="requirement"
                    name="requirement"
                    defaultValue=""
                    className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition text-gray-600"
                  >
                    <option value="" disabled>
                      What are you looking for?
                    </option>

                    <option value="hand-knotted">Hand Knotted</option>

                    <option value="traditional">Traditional</option>

                    <option value="modern">Modern</option>

                    <option value="luxury">Luxury Collection</option>

                    <option value="custom">Custom Design</option>
                  </select>
                </div>

                {/* Size + Quantity */}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="size"
                      className="block text-sm font-medium mb-2"
                    >
                      Approx. Size
                    </label>

                    <input
                      id="size"
                      name="size"
                      type="text"
                      placeholder="e.g. 8 × 10 ft"
                      className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium mb-2"
                    >
                      Quantity
                    </label>

                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      placeholder="1"
                      className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition"
                    />
                  </div>
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Tell us more
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project, preferred style, colours, budget or any other requirements..."
                    className="w-full px-4 py-3.5 border border-gray-200 bg-[#faf9f6] outline-none focus:border-amber-600 transition resize-none"
                  />
                </div>

                {/* Submit Button */}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#171513] text-white font-medium hover:bg-amber-700 transition duration-300"
                >
                  Send Enquiry
                  <ArrowRight size={18} />
                </button>

                <p className="text-xs text-gray-400 text-center leading-5">
                  By submitting this form, you agree to be contacted regarding
                  your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BHADOHI LOCATION + GOOGLE MAP
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Location Information */}

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
                Visit Our Region
              </p>

              <h2 className="font-serif text-4xl sm:text-5xl mt-4">
                From the heart of
                <br />
                <span className="italic">Bhadohi, India.</span>
              </h2>

              <p className="text-gray-600 leading-8 mt-6 max-w-lg">
                Located in Bhadohi, Uttar Pradesh — one of India's renowned
                carpet weaving regions. Our location is deeply connected to the
                rich tradition and craftsmanship of handmade carpets.
              </p>

              {/* Address */}

              <div className="flex gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-[#eee9df] flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-amber-700" />
                </div>

                <div>
                  <p className="font-semibold">Velora Carpets</p>

                  <p className="text-sm text-gray-500 leading-6 mt-1">
                    Bhadohi, Uttar Pradesh
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Google Maps Button */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bhadohi%2C%20Uttar%20Pradesh%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-[#171513] text-white rounded-full text-sm font-medium hover:bg-amber-700 transition"
              >
                Open in Google Maps
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Google Map */}

            <div className="relative overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Bhadohi, Uttar Pradesh Location Map"
                src="https://www.google.com/maps?q=Bhadohi%2C%20Uttar%20Pradesh%2C%20India&output=embed"
                className="w-full h-[400px] sm:h-[450px] lg:h-[500px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WORK WITH US
      ====================================================== */}

      <section className="bg-[#f0ede6] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-medium">
              Why Work With Us
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl mt-4">
              A thoughtful experience from
              <br />
              <span className="italic">enquiry to delivery.</span>
            </h2>
          </div>

          {/* Benefits */}

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {/* Benefit 1 */}

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center">
                <Check size={20} className="text-amber-700" />
              </div>

              <h3 className="font-serif text-xl mt-5">Expert Guidance</h3>

              <p className="text-sm text-gray-500 leading-7 mt-3">
                Get help choosing the right style, material and dimensions for
                your space.
              </p>
            </div>

            {/* Benefit 2 */}

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center">
                <Check size={20} className="text-amber-700" />
              </div>

              <h3 className="font-serif text-xl mt-5">Custom Solutions</h3>

              <p className="text-sm text-gray-500 leading-7 mt-3">
                Bespoke sizes, colours and designs for residential and
                commercial projects.
              </p>
            </div>

            {/* Benefit 3 */}

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center">
                <Check size={20} className="text-amber-700" />
              </div>

              <h3 className="font-serif text-xl mt-5">Personal Service</h3>

              <p className="text-sm text-gray-500 leading-7 mt-3">
                Our team works closely with you from the first conversation to
                the final piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#171513] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
            Have a Project in Mind?
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-5">
            Let's bring your
            <br />
            <span className="italic text-amber-200">vision to life.</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto leading-7 mt-6">
            Share your requirements with our team and discover the possibilities
            of bespoke carpet craftsmanship.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-amber-100 transition"
          >
            <MessageCircle size={18} />
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
