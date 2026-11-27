import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiShoppingCart, FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const { cartCount } = useCart()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/ingredients", label: "Ingredients" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-pickle-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src="/logo.png" alt="Vijaya Lakshmi Pickle Store" className="h-16 w-auto flex-shrink-0" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-pickle-100 hover:text-amber-400 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="relative text-pickle-100 hover:text-amber-400 transition-colors">
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-3">
                {user.isAdmin && (
                  <Link to="/admin" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                    Admin
                  </Link>
                )}
                <span className="text-pickle-200 text-sm">Hi, {user.name}</span>
                <button onClick={handleLogout} className="text-pickle-200 hover:text-amber-400 transition-colors">
                  <FiLogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
              >
                <FiUser size={16} />
                Login
              </Link>
            )}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-pickle-900 border-t border-pickle-700 px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="block text-pickle-100 hover:text-amber-400 font-medium py-1" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/cart" className="block text-pickle-100 hover:text-amber-400 font-medium py-1" onClick={() => setIsOpen(false)}>
            Cart ({cartCount})
          </Link>
          {user ? (
            <>
              {user.isAdmin && <Link to="/admin" className="block text-amber-400 font-medium py-1" onClick={() => setIsOpen(false)}>Admin</Link>}
              <button onClick={() => { handleLogout(); setIsOpen(false) }} className="text-pickle-200 hover:text-amber-400 font-medium py-1">Logout</button>
            </>
          ) : (
            <Link to="/login" className="block text-amber-400 font-medium py-1" onClick={() => setIsOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar