import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddProductReview from "./AddProductReview";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold mb-4">₹{product.price}</p>

      {/* Reviews List */}
      <h3 className="text-xl font-bold mt-6">Customer Reviews</h3>
      {product.reviews.length > 0 ? (
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

      {/* Add Review Component */}
      <AddProductReview onReviewAdded={fetchProductDetails} />
    </div>
  );
};

export default ProductDetail;
