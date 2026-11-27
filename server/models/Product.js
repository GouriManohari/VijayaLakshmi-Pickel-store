import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: 0
  },
  weight: {
    type: String,
    required: [true, "Weight is required"]
  },
  category: {
    type: String,
    required: true,
    enum: ["fruit", "vegetable", "spicy", "sweet", "mixed"],
    default: "fruit"
  },
  image: {
    type: String,
    required: [true, "Image URL is required"]
  },
  ingredients: [{
    type: String
  }],
  inStock: {
    type: Boolean,
    default: true
  }
}, { timestamps: true })

export default mongoose.model("Product", productSchema)
