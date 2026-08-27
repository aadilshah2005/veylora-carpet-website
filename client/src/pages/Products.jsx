import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Royal Hand-Knotted Rug",
    category: "handmade",
    price: "₹45,000",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    name: "Modern Beige Rug",
    category: "modern",
    price: "₹32,000",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    name: "Traditional Persian Rug",
    category: "traditional",
    price: "₹58,000",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    name: "Luxury Wool Carpet",
    category: "luxury",
    price: "₹85,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    name: "Handwoven Heritage Rug",
    category: "handmade",
    price: "₹52,000",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    name: "Contemporary Grey Rug",
    category: "modern",
    price: "₹28,000",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Handmade",
    value: "handmade",
  },
  {
    label: "Modern",
    value: "modern",
  },
  {
    label: "Traditional",
    value: "traditional",
  },
  {
    label: "Luxury",
    value: "luxury",
  },
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get("category") || "all";

  const filteredProducts =
    currentCategory === "all"
      ? products
      : products.filter((product) => product.category === currentCategory);

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({
        category,
      });
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f6f2]">
      {/* ================= HERO ================= */}
      <div className="bg-[#151412] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-amber-400">
            The Bhadohi Collection
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-8xl">
            Crafted for{" "}
            <span className="italic text-amber-300">beautiful spaces.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Explore our curated collection of handcrafted carpets, where
            traditional Indian artistry meets contemporary luxury.
          </p>
        </div>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Category Filter */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isActive = currentCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategoryChange(category.value)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-amber-100 hover:text-amber-800"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Result */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl text-gray-900 sm:text-4xl">
              {currentCategory === "all"
                ? "All Collections"
                : `${
                    currentCategory.charAt(0).toUpperCase() +
                    currentCategory.slice(1)
                  } Rugs`}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "piece" : "pieces"} available
            </p>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-700">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-xl text-gray-900">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium text-gray-900">
                      {product.price}
                    </span>

                    <span className="flex items-center gap-1 text-sm font-medium text-gray-600 group-hover:text-amber-700">
                      View Details
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-20 text-center">
            <h3 className="font-serif text-2xl text-gray-900">No rugs found</h3>

            <p className="mt-2 text-gray-500">Try another collection.</p>

            <button
              type="button"
              onClick={() => setSearchParams({})}
              className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-amber-700"
            >
              View All Collections
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
