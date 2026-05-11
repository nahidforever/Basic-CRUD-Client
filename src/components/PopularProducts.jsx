import { getAllProduct } from "@/lib/product/data";
import React from "react";
import { ProductCard } from "./ProductCard";

const PopularProducts = async () => {
  const products = await getAllProduct();


  return (
    <div>
      <h1>Popular Product</h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
