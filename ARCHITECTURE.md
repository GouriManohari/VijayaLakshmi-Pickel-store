# 🏗️ Application Architecture Overview

## System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT BROWSER                          │
│               http://localhost:5173 (Vite Dev)                  │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │            React Frontend (src/)                       │    │
│  │                                                        │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐             │    │
│  │  │  Home    │  │Products  │  │  Login   │   ...       │    │
│  │  └──────────┘  └──────────┘  └──────────┘             │    │
│  │                                                        │    │
│  │  State Management:                                    │    │
│  │  • AuthContext (user, token)                          │    │
│  │  • CartContext (shopping cart)                        │    │
│  └────────────────────────────────────────────────────────┘    │
│                           │                                     │
│                           │ Axios HTTP Requests                │
│                           ▼                                     │
└─────────────────────────────────────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            │ /api Proxy    │               │
            └───────────────┴───────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │ CORS Enabled      │                   │
        └───────────────────┴───────────────────┘
                            │
                            │ REST API Calls
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│          Node.js Backend (server/)                              │
│       http://localhost:5000 (Express.js)                        │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │                Express Routes                         │    │
│  │                                                        │    │
│  │  /api/auth        → Register, Login, Verify JWT       │    │
│  │  /api/products    → Get all, Get one, CRUD (admin)   │    │
│  │  /api/orders      → Create, Get, Update (admin)       │    │
│  │  /api/health      → Health check                      │    │
│  └────────────────────────────────────────────────────────┘    │
│                           │                                     │
│  ┌────────────────────────▼────────────────────────────────┐   │
│  │          Auth Middleware                               │   │
│  │  • Verify JWT Token                                    │   │
│  │  • Extract user info                                   │   │
│  │  • Check admin status                                  │   │
│  └────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌────────────────────────▼────────────────────────────────┐   │
│  │          Database Models (Mongoose)                    │   │
│  │  • User Model → Passwords hashed with bcryptjs        │   │
│  │  • Product Model → Store pickle info                  │   │
│  │  • Order Model → Track customer orders                │   │
│  └────────────────────────────────────────────────────────┘   │
│                           │                                     │
└─────────────────────────────────────────────────────────────────┘
                            │
                            │ Mongoose Driver
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│               MongoDB Database                                  │
│         (Local: localhost:27017                                 │
│          or Atlas Cloud)                                        │
│                                                                 │
│  Collections:                                                   │
│  • users (email, password_hash, isAdmin, orders)               │
│  • products (name, price, description, inventory)              │
│  • orders (user_id, products, total_price, status)             │
│  • orderitems (order_id, product_id, quantity, price)          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Examples

### Example 1: User Registration & Login Flow

```
1. User fills registration form in React
   │
2. Form submitted to /api/auth/register
   │
3. Backend validates email (unique check)
   │
4. Password hashed with bcryptjs
   │
5. User document saved to MongoDB
   │
6. JWT token generated
   │
7. Token sent back to frontend
   │
8. Frontend stores token in localStorage
   │
9. Token included in all subsequent API requests
```

### Example 2: Product Browse & Add to Cart

```
1. User navigates to Products page
   │
2. Frontend makes GET /api/products
   │
3. Backend queries MongoDB (all products)
   │
4. Returns product list with images & prices
   │
5. Frontend renders ProductCard components
   │
6. User clicks "Add to Cart"
   │
7. Item added to CartContext (client-side state)
   │
8. Cart persists in localStorage
   │
9. User can update quantity or remove items
```

### Example 3: Checkout Flow

```
1. User clicks Checkout from cart page
   │
2. Frontend makes POST /api/orders (with JWT token)
   │
3. Auth middleware verifies JWT token
   │
4. User ID extracted from token
   │
5. Order document created in MongoDB with:
   - user_id (from token)
   - product items (from cart)
   - total price
   - order_items (individual line items)
   │
6. Order saved to database
   │
7. Response sent back with order ID
   │
8. Frontend redirects to order confirmation
   │
9. User can view order in their profile
```

---

## File Structure & Responsibilities

### Frontend Structure (src/)

```
src/
├── App.jsx                    # Main app, React Router setup
├── main.jsx                   # Entry point, React DOM render
├── index.css                  # Global styles
│
├── components/
│   ├── navbar.jsx             # Navigation bar
│   ├── Footer.jsx             # Footer component
│   ├── ProductCard.jsx        # Reusable product card
│   └── ProtectedRoute.jsx     # Route guard for auth-only pages
│
├── context/
│   ├── AuthContext.jsx        # User auth state (login, token, user data)
│   └── CartContext.jsx        # Shopping cart state
│
└── pages/
    ├── Home.jsx               # Landing page
    ├── Products.jsx           # Product listing with filters
    ├── ProductDetail.jsx      # Single product details
    ├── Cart.jsx               # Shopping cart & checkout
    ├── Login.jsx              # Login form
    ├── Register.jsx           # Registration form
    ├── Dashboard.jsx          # User profile & orders
    ├── About.jsx              # About page
    ├── Contact.jsx            # Contact form
    └── admin/
        ├── AdminDashboard.jsx # Admin main page
        ├── ManageProducts.jsx # Add/Edit/Delete products
        └── ManageOrders.jsx   # View/Update order status
```

### Backend Structure (server/)

```
server/
├── server.js                  # Express app setup, middleware, routes
├── seed.js                    # Database population script
├── .env                       # Environment variables (secrets)
│
├── config/
│   └── db.js                  # MongoDB connection setup
│
├── middleware/
│   └── auth.js                # JWT verification middleware
│
├── models/
│   ├── User.js                # User schema (email, password, isAdmin)
│   ├── Product.js             # Product schema (pickle details)
│   └── Order.js               # Order schema (customer orders)
│
└── routes/
    ├── auth.js                # POST /register, POST /login, GET /verify
    ├── products.js            # GET all, GET one, POST, PUT, DELETE
    └── orders.js              # GET user orders, POST create, PUT update
```

---

## Authentication Flow (JWT)

```
┌─────────────────────────────────────────┐
│         User Registration/Login         │
└──────────────────┬──────────────────────┘
                   │
         ┌─────────▼─────────┐
         │  Validate Input   │
         │  Check if exists  │
         └─────────┬─────────┘
                   │
         ┌─────────▼──────────────────┐
         │  Hash password with bcrypt │
         │  (never store plain text)  │
         └─────────┬──────────────────┘
                   │
         ┌─────────▼─────────────────┐
         │  Save to MongoDB          │
         │  (users collection)       │
         └─────────┬─────────────────┘
                   │
         ┌─────────▼──────────────────┐
         │  Generate JWT Token        │
         │  (Header.Payload.Signature)│
         │  - Contains user ID        │
         │  - Contains isAdmin flag   │
         │  - 7 day expiration        │
         └─────────┬──────────────────┘
                   │
         ┌─────────▼──────────────────┐
         │  Send token to frontend    │
         │  (in JSON response)        │
         └─────────┬──────────────────┘
                   │
         ┌─────────▼──────────────────┐
         │  Frontend stores in        │
         │  localStorage              │
         └─────────┬──────────────────┘
                   │
         ┌─────────▼──────────────────┐
         │  On next API request       │
         │  Include token in header:  │
         │  Authorization: Bearer xxx │
         └─────────┬──────────────────┘
                   │
         ┌─────────▼──────────────────┐
         │  Auth middleware verifies  │
         │  - Checks signature        │
         │  - Checks expiration       │
         │  - Extracts user ID        │
         └─────────┬──────────────────┘
                   │
         ┌─────────▼──────────────────┐
         │  Continue to route handler │
         │  with verified user info   │
         └──────────────────────────────┘
```

---

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Auth | Payload | Response |
|--------|----------|------|---------|----------|
| POST | `/register` | ❌ | name, email, password | { user, token } |
| POST | `/login` | ❌ | email, password | { user, token } |
| GET | `/verify` | ✅ JWT | - | { user, isValid } |

### Product Routes (`/api/products`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | ❌ | Get all products |
| GET | `/:id` | ❌ | Get single product |
| POST | `/` | ✅ Admin | Create product |
| PUT | `/:id` | ✅ Admin | Update product |
| DELETE | `/:id` | ✅ Admin | Delete product |

### Order Routes (`/api/orders`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | ✅ Admin | Get all orders |
| GET | `/my-orders` | ✅ | Get user's orders |
| POST | `/` | ✅ | Create order |
| PUT | `/:id` | ✅ Admin | Update order status |

---

## State Management

### AuthContext (Global State)

```javascript
{
  user: {
    id: "user_id_123",
    name: "John Doe",
    email: "john@example.com",
    isAdmin: false
  },
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  isAuthenticated: true,
  loading: false,
  error: null
}
```

### CartContext (Global State)

```javascript
{
  items: [
    {
      productId: "prod_123",
      name: "Avakaya Pickle",
      price: 299,
      quantity: 2,
      image: "url_to_image"
    },
    ...
  ],
  total: 598,
  itemCount: 2
}
```

---

## Security Features

✅ **Password Hashing**: bcryptjs (not stored in plain text)
✅ **JWT Authentication**: Secure token-based auth
✅ **Route Protection**: ProtectedRoute component for frontend
✅ **Admin Checks**: Backend verifies isAdmin flag
✅ **Environment Variables**: Secrets in .env file
✅ **CORS**: Enabled only for localhost:3000 in production
✅ **User ID from Token**: Can't manipulate other users' data

---

## Deployment Considerations

For production deployment, you would:

1. **Environment Variables**:
   - Change JWT_SECRET to random long string
   - Update MONGODB_URI to production database
   - Set NODE_ENV=production

2. **Frontend Build**:
   ```bash
   npm run build  # Creates dist/ folder
   ```

3. **Backend Port**:
   - Use different port or port 3000/8000
   - Deploy to hosting service (Heroku, Railway, Render, etc.)

4. **Database**:
   - Use MongoDB Atlas (highly recommended)
   - Enable network access
   - Create production database user

5. **Security**:
   - Enable HTTPS only
   - Set strong JWT_SECRET
   - Implement rate limiting
   - Add request validation
   - Setup error logging

---

## Testing the Application

### Manual Testing Checklist

- [ ] Register new user
- [ ] Login with credentials
- [ ] Browse products
- [ ] View product details
- [ ] Add to cart
- [ ] Remove from cart
- [ ] Update cart quantity
- [ ] Checkout (create order)
- [ ] View order in profile
- [ ] Login as admin
- [ ] Add new product
- [ ] Edit product
- [ ] Delete product
- [ ] View all orders
- [ ] Update order status

---

This application is now ready for local development! 🎉
