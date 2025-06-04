import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError("Failed to load product details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, );

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 mt-10 text-lg">{error}</div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg p-6">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[300px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {product.title}
          </h1>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-extrabold text-blue-600">
              ${product.price}
            </span>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
              ⭐ {product.rating}
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            Category: <span className="font-medium">{product.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};  

export default ProductDetails;
