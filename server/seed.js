import dotenv from "dotenv"
import mongoose from "mongoose"
import User from "./models/User.js"
import Product from "./models/Product.js"

dotenv.config()

const products = [
  {
    name: "Avakaya (Mango Pickle)",
    description: "The king of Andhra pickles! Made with raw mangoes, mustard powder, red chili powder, and cold-pressed sesame oil. Bold, tangy, and fiery — a must-have on every Telugu dining table.",
    price: 299,
    weight: "500g",
    category: "fruit",
    image: "/avakaya-mango-pickle.png",
    ingredients: ["Raw Mango", "Sesame Oil", "Red Chili Powder", "Mustard Powder", "Fenugreek", "Salt"],
    inStock: true
  },
  {
    name: "Lemon Pickle",
    description: "Tangy and zesty lemon pickle aged to perfection. Made with fresh lemons, mustard oil, and a blend of aromatic spices. Perfect accompaniment for rice and dal.",
    price: 199,
    weight: "400g",
    category: "fruit",
    image: "/lemon-pickle.png",
    ingredients: ["Lemon", "Mustard Oil", "Red Chili", "Turmeric", "Fenugreek Seeds", "Salt"],
    inStock: true
  },
  {
    name: "Mixed Vegetable Pickle",
    description: "A delightful medley of carrots, cauliflower, green chili, and raw mango in a spicy mustard oil base. Crunchy, flavorful, and full of variety.",
    price: 349,
    weight: "500g",
    category: "mixed",
    image: "/mixed-vegetable-pickle.png",
    ingredients: ["Carrot", "Cauliflower", "Green Chili", "Raw Mango", "Mustard Oil", "Spices", "Salt"],
    inStock: true
  },
  {
    name: "Green Chili Pickle",
    description: "For those who love it hot! Crisp green chilies stuffed with a spicy masala of mustard, fenugreek, and fennel. Sun-dried and marinated for intense flavor.",
    price: 179,
    weight: "300g",
    category: "spicy",
    image: "/green-chili-pickle.png",
    ingredients: ["Green Chili", "Mustard Oil", "Mustard Seeds", "Fennel", "Fenugreek", "Salt"],
    inStock: true
  },
  {
    name: "Ginger Pickle",
    description: "Warming and aromatic ginger pickle with a perfect balance of tangy and spicy notes. Made with fresh ginger root, lemon juice, and traditional spices.",
    price: 229,
    weight: "350g",
    category: "vegetable",
    image: "/ginger-pickle.png",
    ingredients: ["Ginger", "Lemon Juice", "Mustard Oil", "Red Chili", "Turmeric", "Salt"],
    inStock: true
  },
  {
    name: "Garlic Pickle",
    description: "Rich and pungent garlic pickle that adds a burst of flavor to any meal. Whole garlic cloves slow-marinated in mustard oil with fiery red chili.",
    price: 249,
    weight: "400g",
    category: "vegetable",
    image: "/garlic-pickle.png",
    ingredients: ["Garlic", "Mustard Oil", "Red Chili Powder", "Fenugreek", "Turmeric", "Salt"],
    inStock: true
  },
  {
    name: "Amla Pickle (Gooseberry)",
    description: "Vitamin C-rich amla pickle with a unique sweet-sour-spicy taste. Indian gooseberry preserved in mustard oil with traditional spices. Great for immunity!",
    price: 269,
    weight: "400g",
    category: "fruit",
    image: "/amla-gooseberry-pickle.png",
    ingredients: ["Amla", "Mustard Oil", "Red Chili", "Fenugreek", "Mustard Seeds", "Turmeric", "Salt"],
    inStock: true
  },
  {
    name: "Sweet Mango Chutney",
    description: "A sweet and mild mango chutney made with ripe mangoes and jaggery. Perfect for those who prefer less spice. Great with parathas and snacks.",
    price: 199,
    weight: "350g",
    category: "sweet",
    image: "/sweet-mango-chutney.png",
    ingredients: ["Ripe Mango", "Jaggery", "Cumin", "Red Chili", "Vinegar", "Salt"],
    inStock: true
  },
  {
    name: "Mango Ginger Pickle",
    description: "A delicious blend of raw mango and ginger with the perfect balance of spice and tang. A South Indian favorite that pairs well with rice and sambar.",
    price: 289,
    weight: "500g",
    category: "fruit",
    image: "/mango-ginger-pickle.png",
    ingredients: ["Raw Mango", "Ginger", "Mustard Oil", "Red Chili", "Mustard Seeds", "Turmeric", "Salt"],
    inStock: true
  },
  {
    name: "Tomato Pickle",
    description: "Tangy and aromatic tomato pickle infused with curry leaves and green chilies. A unique South Indian recipe that adds flavor to any meal.",
    price: 219,
    weight: "400g",
    category: "vegetable",
    image: "/tomato-pickle.png",
    ingredients: ["Tomato", "Curry Leaves", "Green Chili", "Mustard Oil", "Fenugreek Seeds", "Salt"],
    inStock: true
  },
  {
    name: "Carrot Pickle",
    description: "Crispy carrot pickle with a perfect blend of mustard oil and traditional South Indian spices. Crunchy, colorful, and absolutely delicious.",
    price: 189,
    weight: "350g",
    category: "vegetable",
    image: "/carrot-pickle.png",
    ingredients: ["Carrot", "Mustard Oil", "Red Chili", "Turmeric", "Mustard Seeds", "Salt"],
    inStock: true
  },
  {
    name: "Mango Chili Pickle",
    description: "A fiery combination of raw mango and green chilies with extra punch from mustard seeds and fenugreek. For serious spice lovers only!",
    price: 279,
    weight: "450g",
    category: "fruit",
    image: "/mango-chili-pickle.png",
    ingredients: ["Raw Mango", "Green Chili", "Mustard Seeds", "Fenugreek", "Red Chili Powder", "Salt"],
    inStock: true
  },
  {
    name: "Onion Pickle",
    description: "Pungent and tangy onion pickle with the authentic South Indian flavor. Pearl onions marinated in mustard oil with aromatic spices.",
    price: 209,
    weight: "350g",
    category: "vegetable",
    image: "/onion-pickle.png",
    ingredients: ["Onion", "Mustard Oil", "Red Chili", "Mustard Seeds", "Fenugreek Seeds", "Salt"],
    inStock: true
  },
  {
    name: "Tender Mango Pickle",
    description: "Made with extra tender mango pieces for a softer texture. Perfect for those who prefer a milder, less fiery pickle with authentic flavors.",
    price: 319,
    weight: "500g",
    category: "fruit",
    image: "/tender-mango-pickle.png",
    ingredients: ["Tender Mango", "Sesame Oil", "Red Chili", "Mustard Powder", "Turmeric", "Salt"],
    inStock: true
  },
  {
    name: "Garlic & Green Chili Pickle",
    description: "A powerful combination of garlic and green chili creating an explosive flavor. Whole cloves and peppers marinated in mustard oil for maximum taste.",
    price: 259,
    weight: "400g",
    category: "spicy",
    image: "/garlic-green-chili-pickle.png",
    ingredients: ["Garlic", "Green Chili", "Mustard Oil", "Fenugreek Seeds", "Mustard Seeds", "Salt"],
    inStock: true
  },
  {
    name: "Cucumber Pickle",
    description: "Crisp and refreshing cucumber pickle with a unique tangy flavor. A lighter option perfect for those who enjoy milder pickles.",
    price: 159,
    weight: "300g",
    category: "vegetable",
    image: "/cucumber-pickle.png",
    ingredients: ["Cucumber", "Mustard Oil", "Red Chili", "Turmeric", "Mustard Seeds", "Salt"],
    inStock: true
  },
]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB")

    // Clear existing data
    await Product.deleteMany()
    await User.deleteMany()
    console.log("Cleared existing data")

    // Create admin user
    const admin = await User.create({
      name: "Admin",
      email: "admin@vijayalakshmi.com",
      password: "admin123",
      isAdmin: true
    })
    console.log(`Admin user created: ${admin.email} / admin123`)

    // Create sample customer
    const customer = await User.create({
      name: "Sample Customer",
      email: "customer@example.com",
      password: "customer123",
      isAdmin: false
    })
    console.log(`Sample customer created: ${customer.email} / customer123`)

    // Create products
    const createdProducts = await Product.insertMany(products)
    console.log(`${createdProducts.length} products seeded`)

    console.log("\n✅ Database seeded successfully!")
    console.log("\nAdmin Login: admin@vijayalakshmi.com / admin123")
    console.log("Customer Login: customer@example.com / customer123")

    process.exit(0)
  } catch (error) {
    console.error("Seeding error:", error.message)
    process.exit(1)
  }
}

seedDB()
