# 👕 Chiguru Cloth Store – MERN Stack eCommerce App

Chiguru Cloth Store is a modern **full-stack eCommerce web application** built using the **MERN stack**: MongoDB, Express.js, React.js, and Node.js.

It offers a complete online shopping experience for customers across **Men**, **Women**, and **Kids** categories, along with an integrated **Admin Dashboard** to manage products, orders, and subscribers.

> ✨ Real-time order tracking, secure user login, coupon-based email marketing, and a clean, intuitive shopping interface.

---

## 🌟 Key Features

### 🛍️ User Experience
- Browse and filter clothing by category, subcategory, and size
- Add items to cart with size and quantity options
- Secure login, registration, and account-based shopping
- Checkout with address and payment method selection
- Order tracking with live status updates
- Email subscription with coupon delivery (via Nodemailer)

---

## 📄 Main Pages

| Page        | Description |
|-------------|-------------|
| **Home**    | Store introduction and promo highlights |
| **Collections** | Product listings with filters |
| **Contact** | Store location and support |
| **About**   | Brand and mission |
| **Cart**    | View and modify cart items |
| **Account** | Login, register, view orders |
| **Orders**  | Order summary with tracking |
| **Checkout**| Fill shipping address, select payment |
| **Footer**  | Quick links and brand info |

---

## 🔐 Authentication

- Login system using **JSON Web Tokens (JWT)**
- Passwords are securely hashed using **bcrypt**
- Auth-protected routes for orders, cart, and admin access
- User data is scoped to their individual account

---

## 📬 Email Subscription (via Nodemailer)

- Users can subscribe to the newsletter
- Automatically receive an email with:
  - A **coupon code**
  - A **"Redeem Now"** link leading back to the store

---

## 🛠️ Admin Panel

> Access route: `/admin/chiguru`

### Features:
- **Add Products**
  - Upload 4 images
  - Add name, description, price, available sizes
  - Select category (Men, Women, Kids) and subcategory
  - Optional "Best Seller" toggle

- **Manage Products**
  - View all products in list format
  - Delete products

- **Manage Orders**
  - View complete order details:
    - Product summary
    - Quantity
    - Payment method
    - Delivery address
    - Order date
  - Update order status:
    - Order Placed → Packing → Shipped → Out for Delivery → Delivered → Cancelled

- **View Subscribers**
  - Email list of subscribers
  - Search functionality

---

## 🧰 Tech Stack

### Frontend
- React.js
- React Router
- Styled CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JWT for login tokens
- bcrypt for password hashing

### External Services
- **Cloudinary**: Image hosting
- **Nodemailer**: Subscription email system

---

## 📌 Project Highlights

- Seamless product browsing and order flow
- Modular structure for scalability
- Admin control over product and order lifecycle
- Customer engagement via email marketing

---
