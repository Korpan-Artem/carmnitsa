import { api }   from "./client";
import {
  dumpProduct,
  dumpProducts
}                from "./response/products";

export const getProducts = async (params = { populate: "*" }) => {
  const res = await api.get("/products", { params });

  return {
    data: dumpProducts(res.data.data),
    meta: res.data.meta
  };
};

export const getProduct = async (id, params = { populate: "*" }) => {
  const res = await api.get(`/products/${id}`, { params });
  return {
    data: dumpProduct(res.data.data)
  };
};
