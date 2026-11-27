import { useState, useEffect } from "react"
import apiClient from "../utils/api"
import ProductCard from "../components/ProductCard"
import { FiSearch } from "react-icons/fi"

// Mock products as fallback
const mockProducts = [
  { _id: "1", name: "Avakaya (Mango Pickle)", description: "The king of Andhra pickles! Made with raw mangoes, mustard powder, red chili powder, and cold-pressed sesame oil. Bold, tangy, and fiery — a must-have on every Telugu dining table.", price: 299, weight: "500g", category: "fruit", image: "/avakaya-mango-pickle.png", ingredients: ["Raw Mango", "Sesame Oil", "Red Chili Powder", "Mustard Powder", "Fenugreek", "Salt"], inStock: true },
  { _id: "2", name: "Lemon Pickle", description: "Tangy and zesty lemon pickle aged to perfection. Made with fresh lemons, mustard oil, and a blend of aromatic spices. Perfect accompaniment for rice and dal.", price: 199, weight: "400g", category: "fruit", image: "/lemon-pickle.png", ingredients: ["Lemon", "Mustard Oil", "Red Chili", "Turmeric", "Fenugreek Seeds", "Salt"], inStock: true },
  { _id: "3", name: "Mixed Vegetable Pickle", description: "A delightful medley of carrots, cauliflower, green chili, and raw mango in a spicy mustard oil base. Crunchy, flavorful, and full of variety.", price: 349, weight: "500g", category: "mixed", image: "/mixed-vegetable-pickle.png", ingredients: ["Carrot", "Cauliflower", "Green Chili", "Raw Mango", "Mustard Oil", "Spices", "Salt"], inStock: true },
  { _id: "4", name: "Green Chili Pickle", description: "For those who love it hot! Crisp green chilies stuffed with a spicy masala of mustard, fenugreek, and fennel. Sun-dried and marinated for intense flavor.", price: 179, weight: "300g", category: "spicy", image: "/green-chili-pickle.png", ingredients: ["Green Chili", "Mustard Oil", "Mustard Seeds", "Fennel", "Fenugreek", "Salt"], inStock: true },
  { _id: "5", name: "Ginger Pickle", description: "Warming and aromatic ginger pickle with a perfect balance of tangy and spicy notes. Made with fresh ginger root, lemon juice, and traditional spices.", price: 229, weight: "350g", category: "vegetable", image: "/ginger-pickle.png", ingredients: ["Ginger", "Lemon Juice", "Mustard Oil", "Red Chili", "Turmeric", "Salt"], inStock: true },
  { _id: "6", name: "Garlic Pickle", description: "Rich and pungent garlic pickle that adds a burst of flavor to any meal. Whole garlic cloves slow-marinated in mustard oil with fiery red chili.", price: 249, weight: "400g", category: "vegetable", image: "/garlic-pickle.png", ingredients: ["Garlic", "Mustard Oil", "Red Chili Powder", "Fenugreek", "Turmeric", "Salt"], inStock: true },
  { _id: "7", name: "Amla Pickle (Gooseberry)", description: "Vitamin C-rich amla pickle with a unique sweet-sour-spicy taste. Indian gooseberry preserved in mustard oil with traditional spices. Great for immunity!", price: 269, weight: "400g", category: "fruit", image: "/amla-gooseberry-pickle.png", ingredients: ["Amla", "Mustard Oil", "Red Chili", "Fenugreek", "Mustard Seeds", "Turmeric", "Salt"], inStock: true },
  { _id: "8", name: "Sweet Mango Chutney", description: "A sweet and mild mango chutney made with ripe mangoes and jaggery. Perfect for those who prefer less spice. Great with parathas and snacks.", price: 199, weight: "350g", category: "sweet", image: "/sweet-mango-chutney.png", ingredients: ["Ripe Mango", "Jaggery", "Cumin", "Red Chili", "Vinegar", "Salt"], inStock: true },
  { _id: "9", name: "Mango Ginger Pickle", description: "A delicious blend of raw mango and ginger with the perfect balance of spice and tang. A South Indian favorite that pairs well with rice and sambar.", price: 289, weight: "500g", category: "fruit", image: "/avakaya-mango-pickle.png", ingredients: ["Raw Mango", "Ginger", "Mustard Oil", "Red Chili", "Mustard Seeds", "Turmeric", "Salt"], inStock: true },
  { _id: "10", name: "Tomato Pickle", description: "Tangy and aromatic tomato pickle infused with curry leaves and green chilies. A unique South Indian recipe that adds flavor to any meal.", price: 219, weight: "400g", category: "vegetable", image: "/mixed-vegetable-pickle.png", ingredients: ["Tomato", "Curry Leaves", "Green Chili", "Mustard Oil", "Fenugreek Seeds", "Salt"], inStock: true },
  { _id: "11", name: "Carrot Pickle", description: "Crispy carrot pickle with a perfect blend of mustard oil and traditional South Indian spices. Crunchy, colorful, and absolutely delicious.", price: 189, weight: "350g", category: "vegetable", image: "/mixed-vegetable-pickle.png", ingredients: ["Carrot", "Mustard Oil", "Red Chili", "Turmeric", "Mustard Seeds", "Salt"], inStock: true },
  { _id: "12", name: "Mango Chili Pickle", description: "A fiery combination of raw mango and green chilies with extra punch from mustard seeds and fenugreek. For serious spice lovers only!", price: 279, weight: "450g", category: "fruit", image: "/green-chili-pickle.png", ingredients: ["Raw Mango", "Green Chili", "Mustard Seeds", "Fenugreek", "Red Chili Powder", "Salt"], inStock: true },
  { _id: "13", name: "Onion Pickle", description: "Pungent and tangy onion pickle with the authentic South Indian flavor. Pearl onions marinated in mustard oil with aromatic spices.", price: 209, weight: "350g", category: "vegetable", image: "/mixed-vegetable-pickle.png", ingredients: ["Onion", "Mustard Oil", "Red Chili", "Mustard Seeds", "Fenugreek Seeds", "Salt"], inStock: true },
  { _id: "14", name: "Tender Mango Pickle", description: "Made with extra tender mango pieces for a softer texture. Perfect for those who prefer a milder, less fiery pickle with authentic flavors.", price: 319, weight: "500g", category: "fruit", image: "/avakaya-mango-pickle.png", ingredients: ["Tender Mango", "Sesame Oil", "Red Chili", "Mustard Powder", "Turmeric", "Salt"], inStock: true },
  { _id: "15", name: "Garlic & Green Chili Pickle", description: "A powerful combination of garlic and green chili creating an explosive flavor. Whole cloves and peppers marinated in mustard oil for maximum taste.", price: 259, weight: "400g", category: "spicy", image: "/garlic-pickle.png", ingredients: ["Garlic", "Green Chili", "Mustard Oil", "Fenugreek Seeds", "Mustard Seeds", "Salt"], inStock: true },
  { _id: "16", name: "Cucumber Pickle", description: "Crisp and refreshing cucumber pickle with a unique tangy flavor. A lighter option perfect for those who enjoy milder pickles.", price: 159, weight: "300g", category: "vegetable", image: "/lemon-pickle.png", ingredients: ["Cucumber", "Mustard Oil", "Red Chili", "Turmeric", "Mustard Seeds", "Salt"], inStock: true },
]

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  useEffect(() => {
    apiClient.get("/products")
      .then(res => setProducts(res.data))
      .catch(() => setProducts(mockProducts))
      .finally(() => setLoading(false))
  }, [])

  const categories = ["all", ...new Set(products.map(p => p.category))]

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "all" || p.category === category
    return matchesSearch && matchesCategory
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pickle-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#3f704d'}}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold"><span style={{color: '#fbbf24'}}>Our</span> <span style={{color: '#fbbf24'}}>Pickles</span></h1>
          <p className="text-gray-200 mt-2">Fresh, homemade, and packed with flavor</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search pickles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors cursor-pointer text-sm ${
                  category === cat
                    ? "bg-green-100 text-gray-700"
                    : "bg-[#ABC090] text-white hover:bg-[#9fb07d]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-300">
            <p className="text-xl">No pickles found</p>
            <p className="mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
