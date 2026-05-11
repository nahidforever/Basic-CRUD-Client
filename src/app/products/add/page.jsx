import AddProductForm from "@/components/AddProductForm";
import { getAllProduct } from "@/lib/product/data";
import React from "react";

const AddProductsPage = () => {
  return (
    <div>
      <AddProductForm />
    </div>
  );
};

export default AddProductsPage;
