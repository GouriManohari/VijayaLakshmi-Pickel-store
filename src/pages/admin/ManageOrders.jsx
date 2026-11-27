import { useState, useEffect } from "react"
import apiClient from "../../utils/api"
import toast from "react-hot-toast"

function ManageOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = () => {
    apiClient.get("/orders/admin/all")
      .then(res => setOrders(res.data))
      .catch(() => toast.error("Failed to load orders"))
      .finally(() => setLoading(false))
  }

  const updateStatus = async (orderId, status) => {
    try {
      await apiClient.put(`/orders/${orderId}/status`, { status })
      toast.success(`Order marked as ${status}`)
      fetchOrders()
    } catch {
      toast.error("Failed to update order status")
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pickle-600"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Orders</h1>

      <div className="space-y-4">
        {orders.map(order => (
          <div key={order._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Order <span className="font-mono">#{order._id?.slice(-6)}</span></p>
                <p className="font-semibold text-gray-800">{order.user?.name} ({order.user?.email})</p>
                <p className="text-sm text-gray-400">{new Date(order.createdAt).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order._id, e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pickle-500"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <span className="text-lg font-bold text-pickle-700">₹{order.totalAmount}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {order.items?.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    <img src={item.image} alt="" className="w-10 h-10 rounded object-cover" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity} × ₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {order.shippingAddress && (
              <div className="mt-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-gray-700">Shipping: </span>
                {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </div>
            )}
          </div>
        ))}
        {orders.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">No orders yet</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageOrders
