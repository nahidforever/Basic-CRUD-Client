export const getAllProduct = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = res.json();
  return data;
};

export const getProductbyId = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`);
  const data = await res.json();
  return data;
};
