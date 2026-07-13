import { Product } from "@/types/products";

export const BASE_API_URL = "http://localhost:4000/api";

export const API_ROUTES = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    signup: "/auth/signup",
    currentUser: "/auth/user",
  },
  products: {
    list: "/products",
    top10: "/top-10",
    brands: "/brands",
    byId: (id: Product["id"]) => `/product/${id}`,
    metaById: (id: Product["id"]) => `/meta/product/${id}`,
    favorite: (id: Product["id"]) => `/product/${id}/favorite`,
  },
} as const;
