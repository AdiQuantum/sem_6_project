# Chitrashala Dresses E-Commerce Website Report

## 1. Project Overview

This project is a full-stack e-commerce website for an online clothing store named **Chitrashala Dresses**. It allows customers to browse products, search and filter collections, view product details, manage a shopping cart, place orders, and pay using cash on delivery, Stripe, or Razorpay. It also includes a separate admin panel for product and order management.

The project follows the MERN stack approach:

| Layer | Technology |
| --- | --- |
| Frontend | React.js, Vite, Tailwind CSS |
| Admin Panel | React.js, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Authentication | JSON Web Tokens |
| File Upload | Multer and Cloudinary |
| Payments | Stripe, Razorpay, Cash on Delivery |
| Deployment Target | Vercel and MongoDB Atlas |

The repository is divided into three main applications:

| Folder | Purpose |
| --- | --- |
| `frontend` | Customer-facing shopping website |
| `admin` | Admin dashboard for managing products and orders |
| `backend` | REST API server, database models, authentication, product, cart, and order logic |

Additional documentation and design files are stored in:

| Folder | Purpose |
| --- | --- |
| `Requirement_analysis` | Requirement analysis document |
| `Design` | Architecture, deployment strategy, DFD, request-response cycle, and UML-related files |

## 2. Project Objective

The main objective of this project is to provide a complete online shopping platform where customers can purchase clothing products through a responsive website. The system also supports administrative control so that store managers can add products, remove products, view orders, and update order status.

The project is suitable for an academic B.Tech semester project because it demonstrates:

- Full-stack web development
- REST API design
- Database modeling
- Authentication and authorization
- File upload and cloud image hosting
- Payment gateway integration
- Separate customer and admin interfaces
- Deployment-ready project structure

## 3. System Users

### 3.1 Customer

Customers use the frontend website. Their main actions are:

- Register and log in
- Browse latest and trending products
- Search products
- Filter products by category and sub-category
- Sort products by price
- View product details and images
- Select product size
- Add products to cart
- Update or remove cart items
- Enter delivery information
- Place orders
- Pay using COD, Stripe, or Razorpay
- View order history and order status

### 3.2 Administrator

Administrators use the admin panel. Their main actions are:

- Log in using admin credentials
- Add new products with images, price, category, sub-category, sizes, and trending status
- View all products
- Remove products
- View all customer orders
- Update order status such as `Order Placed`, `Packing`, `Shipped`, `Out for delivery`, and `Delivered`

## 4. Application Architecture

The project uses a three-tier architecture.

### 4.1 Presentation Layer

The presentation layer contains two React applications:

- Customer frontend in `frontend`
- Admin panel in `admin`

Both applications are built with Vite and styled mainly using Tailwind CSS utility classes. They communicate with the backend through Axios HTTP requests.

### 4.2 Application Layer

The application layer is the Express.js backend in `backend`. It exposes REST API endpoints for:

- User authentication
- Admin authentication
- Product management
- Cart management
- Order placement
- Payment verification
- Order status updates

### 4.3 Data Layer

The data layer uses MongoDB through Mongoose models. The project defines collections for:

- Users
- Products
- Orders

Cloudinary is used for storing uploaded product images.

### 4.4 High-Level Data Flow

```text
Customer/Admin Browser
        |
        v
React Frontend / Admin Panel
        |
        v
Axios HTTP Request
        |
        v
Express.js REST API
        |
        v
MongoDB / Cloudinary / Payment Gateway
        |
        v
API Response
        |
        v
Updated User Interface
```

## 5. Repository Structure

```text
website/
  admin/
    src/
      assets/
      components/
      pages/
      App.jsx
      main.jsx
    package.json
    vite.config.js
    vercel.json

  backend/
    config/
      cloudinary.js
      mongodb.js
    controllers/
      cartController.js
      orderController.js
      productController.js
      userController.js
    middleware/
      adminAuth.js
      auth.js
      multer.js
    models/
      orderModel.js
      productModel.js
      userModel.js
    routes/
      cartRoute.js
      orderRoute.js
      productRoute.js
      userRoute.js
    server.js
    package.json
    vercel.json

  frontend/
    src/
      assets/
      components/
      context/
      pages/
      App.jsx
      main.jsx
    package.json
    vite.config.js
    vercel.json

  Design/
  Requirement_analysis/
```

## 6. Customer Frontend

The customer frontend is located in the `frontend` folder. It is a React single-page application using React Router for navigation.

### 6.1 Main Routes

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Displays hero section, latest collections, trending products, policies, and newsletter section |
| `/collection` | Collection | Displays all products with filters, search, and sorting |
| `/about` | About | Displays store information and reasons to choose the store |
| `/contact` | Contact | Displays store address, phone number, email, and career information |
| `/product/:productId` | Product | Displays product images, description, price, size selection, and add-to-cart option |
| `/cart` | Cart | Shows selected products, quantity controls, remove option, and cart total |
| `/login` | Login | Handles customer login and registration |
| `/place-order` | Place Order | Collects delivery details and payment method |
| `/orders` | Orders | Displays user's previous orders and order status |
| `/verify` | Verify | Handles Stripe payment verification redirect |

### 6.2 Important Frontend Components

| Component | Purpose |
| --- | --- |
| `NavBar.jsx` | Main site navigation, cart count, profile menu, and mobile menu |
| `SearchBar.jsx` | Search input shown on collection page |
| `Hero.jsx` | Home page hero section |
| `LatestCollection.jsx` | Displays the first ten products from the product list |
| `TrendingNow.jsx` | Displays products marked as trending |
| `ProductItem.jsx` | Reusable product card |
| `RelatedProducts.jsx` | Shows related products by category and sub-category |
| `CartTotal.jsx` | Calculates subtotal, delivery fee, and total amount |
| `OurPolicy.jsx` | Displays store policy highlights |
| `NewsletterBox.jsx` | Newsletter subscription UI |
| `Footer.jsx` | Footer section |

### 6.3 Global Frontend State

The file `frontend/src/context/ShopContext.jsx` manages shared customer-side state:

- Product list
- Cart items
- Search text
- Search visibility
- Authentication token
- Currency
- Delivery fee
- Backend API URL
- Cart calculation helpers
- Cart update helpers

The context fetches product data from:

```text
GET /api/product/list
```

When a user is logged in, cart data is synchronized with the backend through protected cart APIs.

## 7. Admin Panel

The admin panel is located in the `admin` folder. It is also a React single-page application.

### 7.1 Admin Authentication

The admin must log in through the admin login form. Credentials are verified by the backend using environment variables:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `JWT_SECRET`

After successful login, the admin token is stored in local storage and sent in request headers.

### 7.2 Admin Routes

| Route | Page | Purpose |
| --- | --- | --- |
| `/add` | Add Product | Add a new product with images and details |
| `/list` | Product List | View and remove products |
| `/orders` | Orders | View all customer orders and update order status |

### 7.3 Admin Features

#### Add Product

The admin can add:

- Product name
- Product description
- Product price
- Category: Men, Women, Kids
- Sub-category: Topwear, Bottomwear, Winterwear
- Sizes: S, M, L, XL, XXL
- Trending flag
- Up to four product images

Images are uploaded using `multipart/form-data`, processed by Multer, and uploaded to Cloudinary by the backend.

#### Product List

The admin can:

- Fetch all products from the backend
- View product image, name, category, and price
- Remove products by ID

#### Orders

The admin can:

- Fetch all orders
- View ordered items, customer address, payment method, payment status, date, and total amount
- Update order status from a dropdown

## 8. Backend API

The backend is located in the `backend` folder. The entry file is `server.js`.

### 8.1 Server Setup

The backend uses:

- `express` for API routing
- `cors` for cross-origin frontend requests
- `dotenv` for environment variables
- `mongoose` for MongoDB connection
- `cloudinary` for image storage

The server registers these route groups:

```text
/api/user
/api/product
/api/cart
/api/order
```

The root endpoint returns:

```text
API WORKING
```

### 8.2 User API

Base path:

```text
/api/user
```

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/register` | Register a new customer |
| POST | `/login` | Login an existing customer |
| POST | `/admin` | Login an administrator |

#### Registration Logic

The registration controller:

- Checks if the email already exists
- Validates email format using `validator`
- Requires password length of at least 8 characters
- Hashes the password using `bcrypt`
- Saves the user in MongoDB
- Returns a JWT token

#### Login Logic

The login controller:

- Finds the user by email
- Compares password with the hashed password using `bcrypt.compare`
- Returns a JWT token if credentials are valid

#### Admin Login Logic

The admin login controller:

- Compares submitted email and password with environment variables
- Generates an admin JWT token if credentials match

### 8.3 Product API

Base path:

```text
/api/product
```

| Method | Endpoint | Protection | Purpose |
| --- | --- | --- | --- |
| GET | `/list` | Public | Get all products |
| POST | `/single` | Public | Get one product by ID |
| POST | `/add` | Admin | Add a product |
| POST | `/remove` | Admin | Remove a product |

The product add endpoint supports up to four images:

```text
image1, image2, image3, image4
```

Each uploaded image is sent to Cloudinary and the resulting secure URLs are stored in MongoDB.

### 8.4 Cart API

Base path:

```text
/api/cart
```

All cart endpoints require customer authentication.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/get` | Fetch user's cart |
| POST | `/add` | Add product and size to cart |
| POST | `/update` | Update product quantity in cart |

Cart data is stored inside the user document as an object. The structure is:

```json
{
  "productId": {
    "size": quantity
  }
}
```

Example:

```json
{
  "64abc123": {
    "M": 2,
    "L": 1
  }
}
```

### 8.5 Order API

Base path:

```text
/api/order
```

| Method | Endpoint | Protection | Purpose |
| --- | --- | --- | --- |
| POST | `/place` | User | Place COD order |
| POST | `/stripe` | User | Create Stripe checkout session |
| POST | `/razorpay` | User | Create Razorpay order |
| POST | `/verifyStripe` | User | Verify Stripe payment result |
| POST | `/verifyRazorpay` | User | Verify Razorpay payment result |
| POST | `/userorders` | User | Get orders for logged-in user |
| POST | `/list` | Admin | Get all orders |
| POST | `/status` | Admin | Update order status |

### 8.6 Middleware

| Middleware | File | Purpose |
| --- | --- | --- |
| Customer authentication | `middleware/auth.js` | Verifies JWT token and attaches `userId` to request body |
| Admin authentication | `middleware/adminAuth.js` | Verifies admin token against configured admin credentials |
| File upload | `middleware/multer.js` | Handles product image upload files |

## 9. Database Design

The backend uses Mongoose models for MongoDB.

### 9.1 User Model

File:

```text
backend/models/userModel.js
```

Fields:

| Field | Type | Purpose |
| --- | --- | --- |
| `name` | String | Customer name |
| `email` | String | Unique login email |
| `password` | String | Hashed password |
| `cartData` | Object | User's shopping cart |

### 9.2 Product Model

File:

```text
backend/models/productModel.js
```

Fields:

| Field | Type | Purpose |
| --- | --- | --- |
| `name` | String | Product name |
| `description` | String | Product description |
| `price` | Number | Product price |
| `image` | Array | Cloudinary image URLs |
| `category` | String | Men, Women, or Kids |
| `subCategory` | String | Topwear, Bottomwear, or Winterwear |
| `sizes` | Array | Available sizes |
| `trending` | Boolean | Whether product appears in trending section |
| `date` | Number | Product creation timestamp |

### 9.3 Order Model

File:

```text
backend/models/orderModel.js
```

Fields:

| Field | Type | Purpose |
| --- | --- | --- |
| `userId` | String | Customer who placed the order |
| `items` | Array | Ordered products with size and quantity |
| `amount` | Number | Total payable amount |
| `address` | Object | Delivery address |
| `status` | String | Current order status |
| `paymentMethod` | String | COD, Stripe, or Razorpay |
| `payment` | Boolean | Payment completion status |
| `date` | Number | Order timestamp |

## 10. Main Functional Workflows

### 10.1 Customer Registration

```text
Customer enters name, email, and password
        |
Frontend sends POST /api/user/register
        |
Backend validates email and password
        |
Password is hashed using bcrypt
        |
User is saved in MongoDB
        |
JWT token is returned
        |
Frontend stores token in localStorage
```

### 10.2 Customer Login

```text
Customer enters email and password
        |
Frontend sends POST /api/user/login
        |
Backend checks user and password hash
        |
JWT token is returned
        |
Frontend stores token and redirects to home page
```

### 10.3 Product Browsing

```text
Frontend loads
        |
ShopContext calls GET /api/product/list
        |
Backend fetches products from MongoDB
        |
Products are stored in React context
        |
Home, collection, product, cart, and related product pages use the same product data
```

### 10.4 Add to Cart

```text
Customer selects product size
        |
Customer clicks Add to Cart
        |
Frontend updates local cart state
        |
If logged in, frontend sends POST /api/cart/add
        |
Backend updates cartData in user document
```

### 10.5 Checkout with Cash on Delivery

```text
Customer enters delivery address
        |
Customer selects Cash on Delivery
        |
Frontend sends POST /api/order/place
        |
Backend creates order with payment=false
        |
Backend clears customer cart
        |
Customer is redirected to orders page
```

### 10.6 Checkout with Stripe

```text
Customer selects Stripe
        |
Frontend sends POST /api/order/stripe
        |
Backend creates pending order
        |
Backend creates Stripe checkout session
        |
Customer is redirected to Stripe checkout
        |
Stripe redirects back to /verify
        |
Frontend sends POST /api/order/verifyStripe
        |
Backend marks payment as complete or deletes failed order
```

### 10.7 Checkout with Razorpay

```text
Customer selects Razorpay
        |
Frontend sends POST /api/order/razorpay
        |
Backend creates pending order
        |
Backend creates Razorpay order
        |
Razorpay checkout opens in browser
        |
Frontend sends payment response to POST /api/order/verifyRazorpay
        |
Backend verifies payment status with Razorpay
        |
Backend marks order as paid and clears cart
```

### 10.8 Admin Product Upload

```text
Admin fills product form and selects images
        |
Admin panel sends POST /api/product/add with token and FormData
        |
Admin middleware verifies token
        |
Multer receives uploaded files
        |
Cloudinary stores product images
        |
Product data and image URLs are saved in MongoDB
```

### 10.9 Admin Order Status Update

```text
Admin opens orders page
        |
Admin panel sends POST /api/order/list
        |
Backend returns all orders
        |
Admin changes status dropdown
        |
Admin panel sends POST /api/order/status
        |
Backend updates order status in MongoDB
```

## 11. Security Features

The project includes the following security-related features:

- Password hashing using `bcrypt`
- JWT-based user authentication
- JWT-based admin authorization
- Admin credentials stored through environment variables
- Protected cart endpoints
- Protected order endpoints
- Protected product add/remove endpoints
- Payment verification through Stripe and Razorpay APIs
- Sensitive configuration kept in `.env` files

Important environment variables include:

```text
MONGODB_URI
JWT_SECRET
ADMIN_EMAIL
ADMIN_PASSWORD
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_SECRET_KEY
STRIPE_SECRET_KEY
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
VITE_BACKEND_URL
VITE_RAZORPAY_KEY_ID
```

The actual secret values should never be committed to a public repository.

## 12. Payment Methods

The project supports three payment methods.

### 12.1 Cash on Delivery

Cash on delivery creates an order immediately with:

```text
paymentMethod = COD
payment = false
```

The admin can still process and update the order status.

### 12.2 Stripe

Stripe payment creates a checkout session. If the user completes payment, the backend updates the order as paid. If payment fails or is cancelled, the pending order is removed.

### 12.3 Razorpay

Razorpay payment creates a Razorpay order. After payment, the backend fetches the Razorpay order status and marks the local order as paid if the status is `paid`.

## 13. UI and Design

The website uses a clean clothing-store layout with:

- Hero section on the home page
- Product grid layout
- Responsive navigation
- Mobile menu support
- Search bar on collection page
- Filter sidebar for collection browsing
- Product image gallery
- Cart summary section
- Checkout form
- Admin dashboard layout with sidebar navigation

The frontend uses Tailwind CSS classes directly in React components. The design is responsive and supports desktop and mobile layouts.

## 14. Deployment Plan

The project is prepared for deployment on Vercel.

### 14.1 Frontend Deployment

The frontend includes a `vercel.json` rewrite rule:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

This supports React Router browser navigation on Vercel.

### 14.2 Admin Deployment

The admin panel has a similar Vercel rewrite configuration so direct visits to admin routes work correctly.

### 14.3 Backend Deployment

The backend includes a Vercel configuration that routes requests to `server.js` using `@vercel/node`.

### 14.4 Database Deployment

MongoDB Atlas is the intended cloud database. The backend connects using:

```text
process.env.MONGODB_URI
```

The database name used by the code is:

```text
dress
```

## 15. Local Setup Instructions

### 15.1 Backend

```bash
cd backend
npm install
npm run server
```

The backend runs on:

```text
http://localhost:4000
```

### 15.2 Frontend

```bash
cd frontend
npm install
npm run dev
```

### 15.3 Admin Panel

```bash
cd admin
npm install
npm run dev
```

Each application requires the correct environment variables before it can fully work.

## 16. Functional Requirements Covered

| Requirement | Status |
| --- | --- |
| Customer registration | Implemented |
| Customer login | Implemented |
| JWT authentication | Implemented |
| Product listing | Implemented |
| Product details | Implemented |
| Product search | Implemented |
| Product filters | Implemented |
| Product sorting | Implemented |
| Shopping cart | Implemented |
| Cart quantity update | Implemented |
| Checkout form | Implemented |
| Cash on delivery | Implemented |
| Stripe payment | Implemented |
| Razorpay payment | Implemented |
| Order history | Implemented |
| Admin login | Implemented |
| Add product | Implemented |
| Remove product | Implemented |
| View all orders | Implemented |
| Update order status | Implemented |

## 17. Non-Functional Requirements

### 17.1 Usability

The application has a simple and familiar shopping flow:

- Browse products
- Open product details
- Select size
- Add to cart
- Checkout
- Track order

### 17.2 Maintainability

The project is modular:

- Routes are separated from controllers
- Controllers are separated from models
- Middleware handles authentication and uploads
- Frontend pages and components are separated
- Customer and admin interfaces are separate applications

### 17.3 Scalability

The project is appropriate for a small-to-medium academic e-commerce system. MongoDB Atlas and Vercel can support cloud deployment without managing physical servers.

### 17.4 Security

The system uses hashed passwords and JWT tokens. Admin and user routes are protected separately.

## 18. Current Limitations

The project is functional, but the following areas can be improved:

- Product editing is not currently available in the admin panel.
- User profile management is listed in requirements but not fully implemented.
- Product reviews are shown as static UI content, not stored in the database.
- Some informational page content uses placeholder text.
- Cart data is stored inside the user document, which is simple but may need a separate cart collection for larger systems.
- There is no inventory or stock quantity management.
- There is no order cancellation or return workflow.
- There is no email notification system for orders.
- There is no analytics dashboard for sales and performance.
- The source currently displays the rupee symbol through a mis-encoded string in some files; it is intended to represent INR currency.

## 19. Future Enhancements

Possible future improvements include:

- Product edit feature in admin panel
- Inventory and stock tracking
- Product reviews and ratings from real users
- Wishlist functionality
- Coupon and discount system
- Email and SMS order notifications
- User profile page
- Forgot password and reset password workflow
- Advanced admin dashboard with charts
- Sales reports
- AI-based product recommendations
- Chatbot support
- Multi-vendor marketplace support
- Mobile application

## 20. Conclusion

Chitrashala Dresses is a complete MERN-stack e-commerce website project with customer shopping functionality, admin management functionality, database integration, authentication, image upload, and payment gateway support. The customer frontend handles product discovery, cart, checkout, and order tracking, while the admin panel supports product and order management. The backend provides a structured REST API using Express.js, MongoDB, JWT, Cloudinary, Stripe, and Razorpay.

Overall, the project demonstrates a complete end-to-end online shopping system and is well suited for academic evaluation, practical learning, and further enhancement into a production-ready e-commerce platform.
