import { ProductsTable } from "@/components/ProductTable";
import { getAllProduct } from "@/lib/product/data";
import React from "react";

const ProductsPage = async () => {
  const products = await getAllProduct();
  return (
    <div>
      <h2>All Products</h2>

      <ProductsTable products={products}></ProductsTable>
    </div>
  );
};

export default ProductsPage;
