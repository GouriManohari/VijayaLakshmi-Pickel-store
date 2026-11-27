import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import toast from "react-hot-toast"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4">
        <Link to={`/products/${product._id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-[#708238] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-[#708238]">₹{product.price}</span>
          <span className="text-sm text-gray-400">{product.weight}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full bg-[#708238] hover:bg-[#5a6630] text-white py-2 rounded-lg font-medium transition-colors cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
