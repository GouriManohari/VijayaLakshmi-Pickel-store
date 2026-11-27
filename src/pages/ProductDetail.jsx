import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useCart } from "../context/CartContext"
import toast from "react-hot-toast"
import { FiShoppingCart, FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi"

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false))
  }, [id])

  const handleAddToCart = () => {
    addToCart(product, quantity)
    toast.success(`${product.name} added to cart!`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pickle-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <Link to="/products" className="text-pickle-600 hover:underline mt-4 inline-block">← Back to products</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/products" className="inline-flex items-center gap-1 text-pickle-600 hover:text-pickle-700 mb-8 font-medium">
        <FiArrowLeft /> Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg object-cover max-h-[500px]"
          />
        </div>

        <div>
          <span className="inline-block bg-pickle-100 text-pickle-700 text-sm px-3 py-1 rounded-full font-medium capitalize">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">{product.name}</h1>
          <p className="text-gray-500 mt-4 leading-relaxed">{product.description}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-pickle-700">₹{product.price}</span>
            <span className="text-gray-400">/ {product.weight}</span>
          </div>

          {product.ingredients && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-2">Ingredients:</h3>
              <p className="text-gray-500 text-sm">{product.ingredients.join(", ")}</p>
            </div>
          )}

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 text-gray-600 hover:text-pickle-600 cursor-pointer">
                <FiMinus />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 text-gray-600 hover:text-pickle-600 cursor-pointer">
                <FiPlus />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-pickle-600 hover:bg-pickle-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer"
            >
              <FiShoppingCart /> Add to Cart
            </button>
          </div>

          <div className="mt-8 border-t pt-6 space-y-2 text-sm text-gray-500">
            <p>✅ 100% Natural Ingredients</p>
            <p>✅ No Preservatives</p>
            <p>✅ Handcrafted with Love</p>
            {product.inStock ? (
              <p className="text-pickle-600 font-medium">✅ In Stock</p>
            ) : (
              <p className="text-red-500 font-medium">❌ Out of Stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
