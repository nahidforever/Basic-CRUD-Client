export const getAllProduct = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = res.json();
  return data;
};
