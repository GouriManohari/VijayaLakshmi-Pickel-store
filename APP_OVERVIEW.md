# 📊 Vijaya Lakshmi Pickle Store - Application Overview

## 🎯 What This App Does

An **e-commerce platform** for selling authentic Indian pickles (achaar) online.

### Customer Features
- 🏠 Browse home page with hero section
- 🥒 View all pickles with filtering by category
- 🔍 Search for specific products
- 📋 View detailed product information (ingredients, weight, price)
- 🛒 Add products to shopping cart
- 💳 Checkout and place orders
- 📦 View order history
- 👤 Manage profile
- 📧 Contact support form

### Admin Features
- 📊 Admin dashboard
- 🛍️ Manage Products (Add, Edit, Delete)
- 📦 Manage Orders (View all, Update status)
- 👥 View all registered users

---

## 🛠️ Tech Stack

```
Frontend:
├── React 19 ..................... UI Framework
├── Vite ......................... Build Tool (lightning fast)
├── Tailwind CSS ................. Styling (utility-first)
├── React Router 7 ............... Client-side routing
├── Axios ........................ HTTP client
└── React Hot Toast .............. Notifications

Backend:
├── Node.js ...................... JavaScript runtime
├── Express 5 .................... Web server
├── MongoDB ...................... NoSQL Database
├── Mongoose ..................... MongoDB ODM
├── JWT .......................... Authentication
└── bcryptjs ..................... Password hashing
```

---

## 📁 Project Structure

```
Vijaya Lakhsmi Pickel Store/
│
├── Frontend Code (React + Vite)
│   ├── src/
│   │   ├── pages/ ................. Page components
│   │   ├── components/ ............ Reusable UI components
│   │   ├── context/ ............... Global state (Auth, Cart)
│   │   ├── assets/ ................ Images and icons
│   │   ├── App.jsx ................ Routes & main layout
│   │   └── main.jsx ............... Entry point
│   │
│   ├── public/ .................... Static files
│   ├── package.json ............... Frontend dependencies
│   ├── vite.config.js ............ Build config & proxy
│   ├── index.html ................. HTML template
│   └── eslint.config.js .......... Code quality rules
│
├── Backend Code (Node.js + Express)
│   ├── server/
│   │   ├── routes/ ................ API endpoints
│   │   │   ├── auth.js ............ Login/Register
│   │   │   ├── products.js ........ Product CRUD
│   │   │   └── orders.js .......... Order management
│   │   │
│   │   ├── models/ ................ Database schemas
│   │   │   ├── User.js ............ User data model
│   │   │   ├── Product.js ......... Pickle model
│   │   │   └── Order.js ........... Order model
│   │   │
│   │   ├── config/ ................ Configuration
│   │   │   └── db.js .............. Database connection
│   │   │
│   │   ├── middleware/ ............ Request processors
│   │   │   └── auth.js ............ JWT verification
│   │   │
│   │   ├── server.js .............. Express app
│   │   ├── seed.js ................ Database seeding
│   │   ├── package.json ........... Backend dependencies
│   │   └── .env ................... Secrets & config
│
├── QUICK_START.md ................ 5-minute start guide
├── SETUP_GUIDE.md ................ Detailed setup instructions
├── ARCHITECTURE.md ............... Technical deep dive
└── README.md ..................... Original docs
```

---

## 🚀 Quick Start (3 Simple Steps)

### 1️⃣ Start Backend
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

### 2️⃣ Seed Database (First time only)
```bash
# In another terminal, same server folder
npm run seed
# Creates admin & sample products
```

### 3️⃣ Start Frontend
```bash
# Back to root folder
npm run dev
# App runs on http://localhost:5173
```

**Done!** 🎉 Open http://localhost:5173/ in your browser.

---

## 👤 Test Accounts

| Role | Email | Password | Access |
|------|-------|----------|--------|
| **Admin** | admin@vijayalakshmi.com | admin123 | Manage products & orders |
| **Customer** | customer@example.com | customer123 | Browse & shop |

---

## 🗄️ Database (MongoDB)

### Collections & Data Structure

#### Users Collection
```json
{
  "_id": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "$2a$10$hashed_password_here",
  "isAdmin": false,
  "createdAt": "2026-11-27T...",
  "orders": ["order_1", "order_2"]
}
```

#### Products Collection
```json
{
  "_id": "prod_123",
  "name": "Avakaya (Mango Pickle)",
  "description": "The king of Andhra pickles...",
  "price": 299,
  "weight": "500g",
  "category": "fruit",
  "image": "https://...",
  "ingredients": ["Raw Mango", "Sesame Oil", ...],
  "inStock": true,
  "createdAt": "2026-11-27T..."
}
```

#### Orders Collection
```json
{
  "_id": "order_123",
  "user": "user_123",
  "items": [
    {
      "product": "prod_123",
      "quantity": 2,
      "price": 299
    }
  ],
  "total": 598,
  "status": "pending",
  "createdAt": "2026-11-27T...",
  "updatedAt": "2026-11-27T..."
}
```

---

## 🔄 Core User Journeys

### Journey 1: New Customer Registration & Shopping

```
Browse Home Page
        ↓
Click "Register"
        ↓
Fill Form (name, email, password)
        ↓
Backend validates & hashes password
        ↓
Saves to MongoDB (users collection)
        ↓
JWT token generated
        ↓
Redirected to Products Page
        ↓
Browse & Filter Pickles
        ↓
Click "Add to Cart"
        ↓
Item added to CartContext
        ↓
Proceed to Checkout
        ↓
Review Order Total
        ↓
Click "Place Order"
        ↓
Order saved to MongoDB (orders collection)
        ↓
Confirmation Page
        ↓
Can view in "My Orders" in Profile
```

### Journey 2: Admin Managing Inventory

```
Login as Admin
        ↓
Navigate to Admin Dashboard
        ↓
Click "Manage Products"
        ↓
Add New Product (fill form)
        ↓
Backend validates input
        ↓
Saves to MongoDB
        ↓
Product appears on storefront
        ↓
Can Edit or Delete anytime
        ↓
View all Orders
        ↓
Update Order Status
        ↓
Customer sees status update
```

---

## 🔐 Security Architecture

```
Frontend (Secure Storage)
├── Token stored in localStorage
│   └── Included in all API requests as "Bearer token"
│
Request to Backend
├── CORS middleware verifies origin
├── Route handler receives request
│
Auth Middleware (Optional for protected routes)
├── Extracts token from request header
├── Verifies JWT signature
├── Checks token expiration
├── Extracts & validates user ID
│
Route Handler
├── Can access verified user data
├── Can check isAdmin flag
├── Performs business logic
│
Database
├── Passwords never stored plain text
├── bcryptjs hashes with salt
├── Only hash is stored in MongoDB
└── Comparison during login
```

---

## 🌐 API Communication Flow

```
Browser (Frontend)
    ↓
User Action (e.g., click "Add to Cart")
    ↓
React Handler Triggered
    ↓
Axios Makes HTTP Request
    ↓
Request sent to Vite Proxy
    ↓
Proxy forwards to http://localhost:5000/api
    ↓
Express Router Matches Route
    ↓
Middleware Processes Request
    ├─ CORS Check ✓
    ├─ Parse JSON Body ✓
    └─ Auth Verification (if protected route)
    ↓
Route Handler Executes
    ├─ Validate Input
    ├─ Query/Update MongoDB
    └─ Format Response
    ↓
JSON Response Sent Back
    ↓
Axios Interceptor Processes
    ↓
React State Updated
    ↓
UI Re-renders
    ↓
User Sees Result
```

---

## 📱 Available Pages

### Public Pages (No Login Required)
- 🏠 `/` - Home page
- 🥒 `/products` - Browse all products
- 📄 `/product/:id` - Product details
- 📝 `/register` - Sign up
- 🔐 `/login` - Sign in
- 📧 `/contact` - Contact form
- ℹ️ `/about` - About page

### Protected Pages (Login Required)
- 🛒 `/cart` - Shopping cart
- 📦 `/dashboard` - User profile & orders

### Admin Pages (Admin Login Required)
- 📊 `/admin` - Admin dashboard
- 🛍️ `/admin/manage-products` - Product management
- 📦 `/admin/manage-orders` - Order management

---

## 📊 Sample Data Included

The seeding script creates:

**8 Authentic Indian Pickles**
1. Avakaya (Mango Pickle) - ₹299
2. Lemon Pickle - ₹199
3. Mixed Vegetable Pickle - ₹349
4. Green Chili Pickle - ₹179
5. Ginger Pickle - ₹229
6. Garlic Pickle - ₹249
7. Amla (Gooseberry) Pickle - ₹269
8. Sweet Mango Chutney - ₹199

**Test Users**
- Admin account for management
- Customer account for testing checkout

---

## 🧪 Testing the App

### Quick Test Sequence
1. Open http://localhost:5173/
2. Browse home page
3. Go to Products
4. Add a pickle to cart
5. Click checkout
6. Register new account
7. Login and place order
8. Login as admin
9. Manage products
10. Check order status

---

## 🎓 Learning Resources

### Understanding the Code
1. **Frontend Entry**: Open `src/main.jsx` → see how React starts
2. **Routes**: Check `src/App.jsx` → all pages defined here
3. **State**: Look at `src/context/` → AuthContext, CartContext
4. **Backend Routes**: Check `server/routes/` → API endpoints
5. **Database**: Review `server/models/` → data structure

### Concepts to Understand
- ✅ React Hooks (useState, useContext)
- ✅ React Router (Link, Route, Navigate)
- ✅ Axios (GET, POST, PUT, DELETE)
- ✅ Express middleware
- ✅ Mongoose schemas
- ✅ JWT authentication
- ✅ Password hashing

---

## 🚀 Next Steps After Setup

1. ✅ Run the application
2. ✅ Test all features
3. ✅ Explore the code
4. ✅ Understand data flow
5. 🔄 Make modifications
   - Add new features
   - Customize styling
   - Improve functionality
6. 📚 Learn the technologies
7. 🚀 Deploy to production

---

## 📞 Troubleshooting Quick Links

| Problem | Link |
|---------|------|
| Can't start | See QUICK_START.md |
| Setup issues | See SETUP_GUIDE.md |
| Technical details | See ARCHITECTURE.md |
| MongoDB problems | Check server/.env |
| Port conflicts | Change in .env or vite.config.js |

---

## ✨ You're All Set!

Your application is **fully configured** and ready to run.
Everything works out of the box. 

**Let's start building!** 🎉

```
Just run:
  npm run dev (from server folder in one terminal)
  npm run dev (from root folder in another terminal)
  
Then open: http://localhost:5173/
```

**Happy Coding!** 🚀
