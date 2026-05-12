"use server";
import { revalidatePath } from "next/cache";

export const addProduct = async (formdata) => {
  const updateProduct = Object.fromEntries(formdata.entries());
  const modifiedData = {
    title: updateProduct.title,
    price: parseFloat(updateProduct.price),
    stock: parseInt(updateProduct.stock),
    description: updateProduct.description,
    image: updateProduct.image,
  };

  const res = await fetch("http://localhost:5000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });
  const data = await res.json();

  if (!res.ok) {
    return;
  }
  revalidatePath("/products");
  return data;
};

export const deleteProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (!res.ok) {
    return;
  }
  revalidatePath("/products");
  return data;
};

export const updateProduct = async (id, formdata) => {
  const updatedProduct = Object.fromEntries(formdata.entries());

  const modifiedData = {
    title: updatedProduct.title,
    price: parseFloat(updatedProduct.price),
    stock: parseInt(updatedProduct.stock),
    description: updatedProduct.description,
    image: updatedProduct.image,
  };

  const res = await fetch(`http://localhost:5000/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });
  const data = await res.json();

  if (!res.ok) {
    return;
  }
  revalidatePath("/products");
  return data;
};
