import img1 from "../assets/1.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
// import img5 from "../assets/10.png";

const AdminData = {
  admins: [
    {
      username: "Mehran",
      email: "jamali8820@yahoo.com",
      role: "admin",
      status: "active",
      createdAt: "2025-09-01",
      password: "345",
      avatar: img2
    },
    {
      username: "admin02",
      email: "admin02@example.com",
      role: "admin",
      status: "active",
      createdAt: "2024-08-22",
      password: "admin02pass",
      avatar: img8
    },
    {
      username: "Mona",
      email: "jamali88200@yahoo.com",
      role: "admin",
      status: "active",
      createdAt: "2025-09-01",
      password: "345",
      avatar: img2
    }
  ],

  users: [
    {
      username: "maryam",
      email: "mj.jamali.it@gmail.com",
      role: "user",
      status: "active",
      createdAt: "2025-10-12",
      password: "111",
      avatar: img1
    },
    {
      username: "Ali",
      email: "sara.smith@example.com",
      role: "user",
      status: "banned",
      createdAt: "2025-11-20",
      password: "saraPass!",
      avatar: img3
    },
    {
      username: "john_doe",
      email: "john.doe@example.com",
      role: "user",
      status: "active",
      createdAt: "2026-01-05",
      password: "johnDoe_2026",
      avatar: img4
    },
    {
      username: "emma",
      email: "emma.watson@example.com",
      role: "user",
      status: "active",
      createdAt: "2025-12-14",
      password: "emmaMod#1",
      avatar: img5
    },
    {
      username: "Tara",
      email: "tara.brown@example.com",
      role: "user",
      status: "pending",
      createdAt: "2026-01-10",
      password: "michael2026",
      avatar: img6
    },
    {
      username: "michael",
      email: "michael.brown@example.com",
      role: "user",
      status: "pending",
      createdAt: "2026-01-10",
      password: "michael2026",
      avatar: img7
    },
    {
      username: "guest_user",
      email: "guest123@example.com",
      role: "user",
      status: "inactive",
      createdAt: "2025-05-18",
      password: "guestTemp",
      avatar: img9
    }
  ],

  products: [
    { id: "P-01", name: "Laptop Asus", price: 32000000, stock: 12, status: "active" },
    { id: "P-02", name: "AirPods Pro 2", price: 9500000, stock: 40, status: "active" },
    { id: "P-03", name: "Samsung S24 Ultra", price: 58000000, stock: 8, status: "active" },
    { id: "P-04", name: "Sony WH-1000XM5", price: 21000000, stock: 15, status: "active" },
    { id: "P-05", name: "Logitech MX Master 3S", price: 5200000, stock: 30, status: "active" },
    { id: "P-06", name: "MacBook Air M3", price: 47000000, stock: 5, status: "low-stock" },
    { id: "P-07", name: "HP Office Printer", price: 8900000, stock: 20, status: "active" },
    { id: "P-08", name: "Xiaomi Power Bank 20000mAh", price: 1200000, stock: 100, status: "active" }
  ],

  orders: [
    { orderId: 1001, user: "maryam", amount: 250000, status: "paid", date: "2026-01-10" },
    { orderId: 1002, user: "sara", amount: 780000, status: "pending", date: "2026-01-14" },
    { orderId: 1003, user: "john_doe", amount: 1250000, status: "shipped", date: "2026-01-21" },
    { orderId: 1004, user: "emma", amount: 530000, status: "refunded", date: "2025-12-02" },
    { orderId: 1005, user: "michael", amount: 980000, status: "cancelled", date: "2026-01-11" },
    { orderId: 1006, user: "ali_admin", amount: 1990000, status: "paid", date: "2026-01-14" },
    { orderId: 1007, user: "guest_user", amount: 450000, status: "pending", date: "2025-11-18" },
    { orderId: 1008, user: "admin02", amount: 310000, status: "paid", date: "2024-09-02" }
  ],

  logs: [
    { event: "user-login", user: "ali_admin", time: "09:12", date: "2026-01-22" },
    { event: "edit-product", user: "ali_admin", product: "Laptop Asus", time: "10:40", date: "2026-01-19" },
    { event: "order-created", user: "john_doe", time: "14:22", date: "2026-01-18" },
    { event: "password-change", user: "maryam", time: "17:10", date: "2026-01-22" },
    { event: "failed-login", user: "sara", time: "08:33", date: "2026-01-17" },
    { event: "product-added", user: "admin02", product: "Sony WH-1000XM5", time: "16:12", date: "2026-02-12" },
    { event: "user-logout", user: "emma", time: "19:05", date: "2026-01-12" },
    { event: "stock-update", user: "ali_admin", product: "MacBook Air M3", time: "11:49", date: "2026-01-12" }
  ],

  activity: [
    {
      id: "A-001",
      type: "login",
      message: "Ali Admin logged into the dashboard",
      time: "09:12",
      date: "2026-01-22"
    },
    {
      id: "A-002",
      type: "product-update",
      message: "Laptop Asus was updated",
      time: "10:40",
      date: "2026-01-19"
    },
    {
      id: "A-003",
      type: "order",
      message: "New order created by john_doe",
      time: "14:22",
      date: "2026-01-18"
    },
    {
      id: "A-004",
      type: "security",
      message: "Maryam changed account password",
      time: "17:10",
      date: "2026-01-22"
    },
    {
      id: "A-005",
      type: "error",
      message: "Failed login attempt detected",
      time: "08:33",
      date: "2026-01-17"
    },
    {
      id: "A-006",
      type: "product-add",
      message: "Sony WH-1000XM5 was added",
      time: "16:12",
      date: "2026-02-12"
    }
  ],

 tickets: [
  {
    id: "T-001",
    user: "maryam",
    subject: "Login issue",
    priority: "high",
    status: "open",
    createdAt: "2026-01-18",
    updatedAt: "2026-01-18"
  },
  {
    id: "T-002",
    user: "sara",
    subject: "Order cancellation",
    priority: "medium",
    status: "pending",
    createdAt: "2026-01-20",
    updatedAt: "2026-01-21"
  },
  // New tickets for maryam
  {
    id: "T-003",
    user: "maryam",
    subject: "Password change request",
    priority: "medium",
    status: "pending",
    createdAt: "2026-02-01",
    updatedAt: "2026-02-01"
  },
  {
    id: "T-004",
    user: "maryam",
    subject: "Question about recent invoice",
    priority: "low",
    status: "open",
    createdAt: "2026-02-05",
    updatedAt: "2026-02-05"
  },
  {
    id: "T-005",
    user: "maryam",
    subject: "Issue viewing orders",
    priority: "high",
    status: "open",
    createdAt: "2026-02-08",
    updatedAt: "2026-02-08"
  }
]
,

  reports: [
    {
      id: "R-10",
      type: "login-attempt",
      user: "maryam",
      description: "multiple failed login attempts",
      date: "2026-01-20"
    },
    {
      id: "R-11",
      type: "payment-error",
      user: "sara",
      description: "payment gateway timeout",
      date: "2026-01-21"
    }
  ],

  // ✅ NEW SECTION: Notifications (بدون read)
  notifications: [
  {
    id: "N-001",
    user: "maryam",
    type: "order",
    title: "Order shipped",
    message: "Order #1003 has been shipped.",
    time: "5 min ago"
  },
  {
    id: "N-002",
    user: "maryam",
    type: "security",
    title: "Security alert",
    message: "Suspicious login detected.",
    time: "20 min ago"
  },
  {
    id: "N-003",
    user: "emma",
    type: "promo",
    title: "Special discount",
    message: "20% off for selected products.",
    time: "1 day ago"
  },
  {
    id: "N-004",
    user: null,
    type: "payment",
    title: "Payment successful",
    message: "Your recent payment was completed.",
    time: "2 days ago"
  },
  {
    id: "N-005",
    user: null,
    type: "profile",
    title: "Profile incomplete",
    message: "Complete your profile information.",
    time: "3 days ago"
  }
]

};

export default AdminData;
