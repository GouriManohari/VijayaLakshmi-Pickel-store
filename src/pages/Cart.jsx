import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi"
import toast from "react-hot-toast"

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <FiShoppingBag size={64} className="mx-auto text-gray-300" />
        <h2 className="text-2xl font-bold text-gray-800 mt-6">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Looks like you haven&apos;t added any pickles yet!</p>
        <Link to="/products" className="inline-block mt-6 bg-pickle-600 hover:bg-pickle-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item._id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.weight}</p>
              <p className="text-pickle-700 font-bold mt-1">₹{item.price}</p>
            </div>
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="px-2 py-1 text-gray-500 hover:text-pickle-600 cursor-pointer">
                <FiMinus size={14} />
              </button>
              <span className="px-3 text-sm font-medium">{item.quantity}</span>
              <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="px-2 py-1 text-gray-500 hover:text-pickle-600 cursor-pointer">
                <FiPlus size={14} />
              </button>
            </div>
            <p className="font-bold text-gray-800 w-20 text-right">₹{item.price * item.quantity}</p>
            <button
              onClick={() => { removeFromCart(item._id); toast.success("Removed from cart") }}
              className="text-red-400 hover:text-red-600 cursor-pointer"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-pickle-50 rounded-xl p-6 border border-pickle-100">
        <div className="flex justify-between items-center text-lg">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-bold text-gray-800">₹{cartTotal}</span>
        </div>
        <div className="flex justify-between items-center text-lg mt-2">
          <span className="text-gray-600">Delivery</span>
          <span className="text-pickle-600 font-medium">{cartTotal >= 500 ? "Free" : "₹50"}</span>
        </div>
        <div className="border-t border-pickle-200 mt-4 pt-4 flex justify-between items-center text-xl">
          <span className="font-bold text-gray-800">Total</span>
          <span className="font-bold text-pickle-700">₹{cartTotal + (cartTotal >= 500 ? 0 : 50)}</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">Free delivery on orders above ₹500</p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => { clearCart(); toast.success("Cart cleared") }}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 font-medium transition-colors cursor-pointer"
        >
          Clear Cart
        </button>
        <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
