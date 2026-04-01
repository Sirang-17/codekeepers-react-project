import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Not Found</div>;

  return (
    <div className="p-4">
      <img src={product.image} className="w-full h-60 object-cover" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p className="text-gray-500">{product.location}</p>
    </div>
  );
}