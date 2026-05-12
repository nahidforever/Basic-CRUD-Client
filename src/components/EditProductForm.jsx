"use client";

import { updateProduct } from "@/lib/product/action";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

const EditProductForm = ({ product }) => {
  const { _id, title, description, price, stock, image } = product;
  const router = useRouter();
  const handleSubmit = async (formData) => {
    const data = await updateProduct(_id, formData);

    if (data.modifiedCount > 0) {
      router.push("/products");
    }
  };
  return (
    <div className="flex w-full items-center justify-center mt-15">
      <Form
        action={handleSubmit}
        className="flex w-96 flex-col gap-4 border p-5 rounded-md"
      >
        <TextField defaultValue={title} name="title" type="text">
          <Label>Product Name</Label>
          <Input placeholder="Enter Product Name" />
        </TextField>
        <TextField defaultValue={description} name="description" type="text">
          <Label>Product Description</Label>
          <Input placeholder="Enter Product Description" />
        </TextField>
        <TextField defaultValue={price} name="price" type="number">
          <Label>Product Price</Label>
          <Input placeholder="Enter Product Price" />
        </TextField>
        <TextField defaultValue={image} name="image" type="url">
          <Label>Product Image</Label>
          <Input placeholder="Enter Product Image" />
        </TextField>
        <TextField defaultValue={stock} name="stock" type="number">
          <Label>Product Stock</Label>
          <Input placeholder="Enter Product Stock" />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">Update Product</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditProductForm;
