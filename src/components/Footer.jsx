import { Link } from "react-router-dom"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

function Footer() {
  return (
    <footer className="bg-pickle-900 text-pickle-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/lotus-logo.png" alt="Vijaya Lakshmi Logo" className="h-8 w-8" />
            <h3 className="text-xl font-bold text-amber-400">Vijaya Lakshmi</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Authentic homemade pickles made with love and traditional recipes passed down through generations.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="transition-colors hover:text-amber-400" style={{ color: 'inherit' }}>Our Products</Link></li>
            <li><Link to="/ingredients" className="transition-colors hover:text-amber-400" style={{ color: 'inherit' }}>Ingredients</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-amber-400" style={{ color: 'inherit' }}>About Us</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-amber-400" style={{ color: 'inherit' }}>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FiPhone size={14} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FiMail size={14} /> info@vijayalakshmi.com</li>
            <li className="flex items-center gap-2"><FiMapPin size={14} /> Hyderabad, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pickle-700 text-center py-4 text-sm text-pickle-400">
        &copy; {new Date().getFullYear()} Vijaya Lakshmi Pickle Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
