import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddProductReview } from "./ProductReview.jsx";
import AddToCart from "./AddToCart.jsx";
import { getProductDetails } from "../../services/productService.js";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("Product ID:", productId);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const { data } = await getProductDetails(productId);
      setProduct(data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProductDetails();
  }, [productId]);
  console.log('product', product)

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Product Main Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              alt={product.name}
              className="rounded shadow w-full h-auto"
              src={product.images.length > 0 ? product.images[0] : "https://placehold.co/600x400"}
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Price: </span>${product.price}
            </p>

            <AddToCart product={product} />

          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Product Details</h2>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Specifications</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Frame Material: {product.frameMaterial || "Acetate"}</li>
            <li>Lens Material: {product.lensMaterial || "Polycarbonate"}</li>
            <li>Frame Shape: {product.frameShape || "Rectangular"}</li>
            <li>Frame Color: {product.frameColor || "Black"}</li>
            <li>Lens Width: {product.lensWidth || "52mm"}</li>
            <li>Bridge Width: {product.bridgeWidth || "18mm"}</li>
            <li>Temple Length: {product.templeLength || "140mm"}</li>
          </ul>
          <h3 className="text-xl font-bold mb-4">Description</h3>
          <p className="text-gray-700 mb-4">{product.longDescription}</p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review._id} className="bg-gray-100 p-4 rounded mb-2">
              <p className="text-gray-700">
                <strong>{review.user.name}</strong> ({review.rating}⭐)
              </p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
        <AddProductReview onReviewAdded={fetchProductDetails} />
      </section>

    </main>
  );
};

export default ProductDetail;
