import EditProductForm from "@/components/EditProductForm";
import { getAllProduct, getProductbyId } from "@/lib/product/data";
import React from "react";

const EditProductPage = async ({ params }) => {
  const { productId } = await params;

  const product = await getProductbyId(productId);

  console.log(product);
  return (
    <div>
      <h1>Edit Product</h1>

      <EditProductForm product={product}></EditProductForm>
    </div>
  );
};

export default EditProductPage;
