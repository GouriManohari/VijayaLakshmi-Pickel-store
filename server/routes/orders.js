import express from "express"
import Order from "../models/Order.js"
import Product from "../models/Product.js"
import User from "../models/User.js"
import { protect, admin } from "../middleware/auth.js"

const router = express.Router()

// POST /api/orders - Create order
router.post("/", protect, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" })
    }

    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const deliveryCharge = totalAmount >= 500 ? 0 : 50

    const order = await Order.create({
      user: req.user._id,
      items,
      totalAmount: totalAmount + deliveryCharge,
      shippingAddress
    })

    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET /api/orders/my - Get user's orders
router.get("/my", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET /api/orders/admin/all - Get all orders (admin)
router.get("/admin/all", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email").sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET /api/orders/admin/recent - Get recent orders (admin)
router.get("/admin/recent", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email").sort({ createdAt: -1 }).limit(10)
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET /api/orders/admin/stats - Get dashboard stats (admin)
router.get("/admin/stats", protect, admin, async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments()
    const totalCustomers = await User.countDocuments({ isAdmin: false })
    const totalProducts = await Product.countDocuments()

    const revenueResult = await Order.aggregate([
      { $match: { status: { $ne: "cancelled" } } },
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ])
    const totalRevenue = revenueResult[0]?.total || 0

    res.json({ totalOrders, totalRevenue, totalCustomers, totalProducts })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// PUT /api/orders/:id/status - Update order status (admin)
router.put("/:id/status", protect, admin, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    )
    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }
    res.json(order)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
