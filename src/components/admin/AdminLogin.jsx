import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginAdmin} from '../../services/admin/authService'
import { adminLoginStart, adminLoginSuccess, adminLoginFailure } from '../../store/adminAuthSlice';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(adminLoginStart());
    
    try {
      // Replace with actual login API request
      const response = await loginAdmin(formData);
      console.log("login",response.data)
      dispatch(adminLoginSuccess(response.data)); // Assuming response contains user data
      navigate('/');
    } catch (err) {
      dispatch(adminLoginFailure(err.message));
    }
  };


  return (
    <div className="flex justify-center  items-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg my-20 shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    
    </div>
  </div>
  );
};

export default AdminLogin;
