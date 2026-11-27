import { useState, useEffect } from "react"
import apiClient from "../../utils/api"
import toast from "react-hot-toast"
import { FiPlus, FiEdit2, FiTrash2, FiX } from "react-icons/fi"

const emptyProduct = { name: "", description: "", price: "", weight: "", category: "fruit", image: "", ingredients: "", inStock: true }

function ManageProducts() {
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(emptyProduct)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = () => {
    apiClient.get("/products")
      .then(res => setProducts(res.data))
      .catch(() => toast.error("Failed to load products"))
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...form,
      price: Number(form.price),
      ingredients: form.ingredients.split(",").map(s => s.trim()).filter(Boolean)
    }

    try {
      if (editing) {
        await apiClient.put(`/products/${editing}`, payload)
        toast.success("Product updated!")
      } else {
        await apiClient.post("/products", payload)
        toast.success("Product created!")
      }
      setShowForm(false)
      setEditing(null)
      setForm(emptyProduct)
      fetchProducts()
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong")
    }
  }

  const handleEdit = (product) => {
    setForm({
      ...product,
      ingredients: product.ingredients?.join(", ") || ""
    })
    setEditing(product._id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return
    try {
      await apiClient.delete(`/products/${id}`)
      toast.success("Product deleted!")
      fetchProducts()
    } catch {
      toast.error("Failed to delete product")
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Products</h1>
        <button
          onClick={() => { setShowForm(true); setEditing(null); setForm(emptyProduct) }}
          className="flex items-center gap-2 bg-pickle-600 hover:bg-pickle-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
        >
          <FiPlus /> Add Product
        </button>
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">{editing ? "Edit Product" : "Add New Product"}</h2>
              <button onClick={() => { setShowForm(false); setEditing(null) }} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <FiX size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickle-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea name="description" rows="3" required value={form.description} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickle-500 resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input type="number" name="price" required value={form.price} onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickle-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                  <input type="text" name="weight" required value={form.weight} onChange={handleChange} placeholder="e.g. 250g"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickle-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select name="category" value={form.category} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickle-500">
                  <option value="fruit">Fruit</option>
                  <option value="vegetable">Vegetable</option>
                  <option value="spicy">Spicy</option>
                  <option value="sweet">Sweet</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input type="url" name="image" required value={form.image} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickle-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients (comma-separated)</label>
                <input type="text" name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Mango, Salt, Chili..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickle-500" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="inStock" checked={form.inStock} onChange={handleChange} id="inStock" className="rounded" />
                <label htmlFor="inStock" className="text-sm text-gray-700">In Stock</label>
              </div>
              <button type="submit"
                className="w-full bg-pickle-600 hover:bg-pickle-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                {editing ? "Update Product" : "Create Product"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Stock</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map(product => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-medium text-gray-800">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 capitalize">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">₹{product.price}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(product)} className="text-blue-500 hover:text-blue-700 cursor-pointer"><FiEdit2 size={16} /></button>
                      <button onClick={() => handleDelete(product._id)} className="text-red-400 hover:text-red-600 cursor-pointer"><FiTrash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-400">No products yet. Add your first product!</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageProducts
