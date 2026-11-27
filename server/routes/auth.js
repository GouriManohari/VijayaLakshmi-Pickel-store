import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })
}

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" })
    }

    const user = await User.create({ name, email, password })
    const token = generateToken(user._id)

    res.status(201).json({
      token,
      user: { _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    const token = generateToken(user._id)

    res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET /api/auth/me
router.get("/me", protect, async (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin
  })
})

export default router
