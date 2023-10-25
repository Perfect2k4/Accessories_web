import {
  Default,
  About,
  Product,
  User,
  Cart,
  ProductDetails,
  ResetPassword,
  Account,
  Privacy,
} from "page";

// Public Routes
const publicRoutes = [
  { path: "/", component: Default },
  { path: "/about", component: About },
  { path: "/product", component: Product },
  { path: "/cart", component: Cart },
  { path: "/user", component: User },
  { path: "/product-details", component: ProductDetails },
  { path: "/reset-password", component: ResetPassword },
  { path: "/accounts", component: Account },
  { path: "/privacy", component: Privacy },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
