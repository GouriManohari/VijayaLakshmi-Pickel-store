import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import apiClient from "../../utils/api"
import { FiPackage, FiDollarSign, FiUsers, FiShoppingBag } from "react-icons/fi"

function AdminDashboard() {
  const [stats, setStats] = useState({ totalOrders: 0, totalRevenue: 0, totalCustomers: 0, totalProducts: 0 })
  const [recentOrders, setRecentOrders] = useState([])

  useEffect(() => {
    apiClient.get("/orders/admin/stats")
      .then(res => setStats(res.data))
      .catch(() => {})

    apiClient.get("/orders/admin/recent")
      .then(res => setRecentOrders(res.data))
      .catch(() => {})
  }, [])

  const statCards = [
    { label: "Total Orders", value: stats.totalOrders, icon: <FiShoppingBag size={24} />, color: "bg-blue-50 text-blue-600" },
    { label: "Revenue", value: `₹${stats.totalRevenue.toLocaleString()}`, icon: <FiDollarSign size={24} />, color: "bg-green-50 text-green-600" },
    { label: "Customers", value: stats.totalCustomers, icon: <FiUsers size={24} />, color: "bg-purple-50 text-purple-600" },
    { label: "Products", value: stats.totalProducts, icon: <FiPackage size={24} />, color: "bg-amber-50 text-amber-600" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex gap-3">
          <Link to="/admin/products" className="bg-pickle-600 hover:bg-pickle-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Manage Products
          </Link>
          <Link to="/admin/orders" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Manage Orders
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map(order => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">#{order._id?.slice(-6)}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{order.user?.name}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">₹{order.totalAmount}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      order.status === "delivered" ? "bg-green-100 text-green-700" :
                      order.status === "shipped" ? "bg-blue-100 text-blue-700" :
                      order.status === "processing" ? "bg-amber-100 text-amber-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {recentOrders.length === 0 && (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-400">No orders yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
