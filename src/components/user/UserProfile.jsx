import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // ✅ Navigation ke liye import kiya
import { getCurrentUser } from "../../services/user/authService";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const authUser = useSelector((state) => state.auth.user);
  const userOrders= useSelector((state)=>state.orders.orders)
  const userSavedItems = useSelector((state) => state.savedItems.savedItems);
  const navigate = useNavigate(); // ✅ Navigation hook

  useEffect(() => {
    if (authUser) {
      setUser(authUser);
      console.log("authuser.data.user",authUser)
      console.log("authuser",authUser)
    } else {
      getCurrentUser()
        .then((data) => setUser(data.data.user))
        .catch((err) => console.error(err));
    }
    if(userOrders){
      setOrders(userOrders)
    }
    if(userSavedItems){
      setSavedItems(userSavedItems)
    }
    
  }, [authUser,userOrders,userSavedItems]);

  if (!user) {
    return <p className="text-center text-gray-500">Loading profile...</p>;
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex justify-between items-center p-6 bg-blue-500">
          <div className="flex items-center">
            <img
              alt={`Profile picture of ${user.fullName}`}
              className="w-24 h-24 rounded-full border-4 border-white"
              src={user.image || "https://placehold.co/100x100"}
            />
            <div className="ml-4">
              <h2 className="text-white text-2xl font-semibold">{user.fullName}</h2>
              <p className="text-blue-200">{user.email}</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <button
            className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100"
            onClick={() => navigate("/edit-profile")} // ✅ Edit Profile page par navigate karega
          >
            Edit Profile
          </button>
        </div>

        {/* Personal Information */}
        <div className="py-8 mx-8">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <p className="bg-gray-100 p-2 rounded">{user.fullName}</p>
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <p className="bg-gray-100 p-2 rounded">{user.email}</p>
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <p className="bg-gray-100 p-2 rounded">{user.phoneNo || "N/A"}</p>
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <p className="bg-gray-100 p-2 rounded">{user.address || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="px-8">
        <h3 className="text-xl font-semibold mt-6 mb-4">Order History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td className="py-2 px-4 border-b">{order._id}</td>
                    <td className="py-2 px-4 border-b">{order.date}</td>
                    <td className="py-2 px-4 border-b">{order.status}</td>
                    <td className="py-2 px-4 border-b">${order.total}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-2 px-4 border-b text-center text-gray-500">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </div>
        

        {/* Saved Items */}
        <div className="p-8">
        <h3 className="text-xl font-semibold mt-6 mb-4">Saved Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {savedItems.length > 0 ? (
            savedItems.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img alt={item.name} className="w-full h-48 object-cover" src={item.image} />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No saved items found.</p>
          )}
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Profile;
