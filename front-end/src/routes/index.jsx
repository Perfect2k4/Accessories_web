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
  { path: "/", component: Default, layout: true },
  { path: "/about", component: About, layout: true },
  { path: "/product", component: Product, layout: true },
  { path: "/cart", component: Cart, layout: true },
  { path: "/user", component: User, layout: true },
  { path: "/product-details", component: ProductDetails, layout: true },
  { path: "/reset-password", component: ResetPassword, layout: true },
  { path: "/accounts", component: Account, layout: true },
  { path: "/privacy", component: Privacy, layout: true },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
