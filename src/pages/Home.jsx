import { Link } from "react-router-dom"
import { FiArrowRight, FiStar, FiTruck, FiShield } from "react-icons/fi"

const featuredProducts = [
  { id: 1, name: "Avakaya (Mango Pickle)", price: 299, image: "/avakaya-mango-pickle.png", description: "Authentic Avakaya - tangy & spicy raw mango pickle" },
  { id: 2, name: "Lemon Pickle", price: 199, image: "/lemon-pickle.png", description: "Fresh lemon pickle with mustard oil & spices" },
  { id: 3, name: "Mixed Vegetable Pickle", price: 349, image: "/mixed-vegetable-pickle.png", description: "Colorful medley of carrots, cauliflower & mango" },
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-4 md:py-6 overflow-hidden" style={{backgroundColor: '#3f704d'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#3f704d] via-[#4a7d57] to-[#2d4f38]"></div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-1">
              <img src="/lotus-logo.png" alt="Vijaya Lakshmi Logo" className="h-28 md:h-36 w-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-amber-300 -mt-2">
              Authentic Homemade Pickles
            </h1>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-green-100 leading-relaxed">
              Taste the tradition! Handcrafted pickles made with the finest ingredients and recipes passed down through generations by Vijaya Lakshmi. 100% natural, no preservatives.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#708238] hover:bg-[#5a6630] text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg shadow-lg"
              >
                Shop Now <FiArrowRight />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-[#708238] hover:bg-[#708238] hover:text-white text-white px-8 py-3 rounded-lg font-semibold transition-all text-lg"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-8" style={{backgroundColor: '#3f704d'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FiStar className="text-amber-400" size={32} />, title: "Premium Quality", desc: "Only the freshest ingredients sourced locally" },
              { icon: <FiTruck className="text-amber-400" size={32} />, title: "Fast Delivery", desc: "Delivered fresh to your doorstep across India" },
              { icon: <FiShield className="text-amber-400" size={32} />, title: "100% Natural", desc: "No preservatives, no artificial flavors" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-green-50 border border-green-200">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8" style={{backgroundColor: '#3f704d'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold"><span style={{color: '#fbbf24'}}>Our</span> <span style={{color: '#fbbf24'}}>Bestsellers</span></h2>
            <p className="text-gray-200 mt-3">Loved by thousands of customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold" style={{color: '#708238'}}>₹{product.price}</span>
                    <Link to="/products" className="hover:text-[#708238] font-medium text-sm transition-colors" style={{color: '#708238'}}>
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/products" className="inline-flex items-center gap-2 bg-[#708238] hover:bg-[#5a6630] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Products <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-6" style={{backgroundColor: '#3f704d'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Want Bulk Orders?</h2>
          <p className="text-gray-200 mt-3">We offer special pricing for bulk orders and wholesale customers.</p>
          <Link to="/contact" className="inline-block mt-6 bg-[#708238] hover:bg-[#5a6630] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
