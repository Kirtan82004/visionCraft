import React, { useState } from 'react';
import { Input } from '../index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupStart, signupSuccess, signupFailure } from '../../store/authSlice';
import { registerUser } from '../../services/user/authService';

const UserSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNo: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords don't match");
    }
    dispatch(signupStart());
    try {
      const response = await registerUser(formData);
      console.log("signup",response.data)

      dispatch(signupSuccess(response.data.user)); // Assuming response contains user data
    } catch (err) {
      dispatch(signupFailure(err.message));
    }
  };

  return (
    <div className="flex mt-15 justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">User Signup</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Phone Number"
            type="tel"
            name="phoneNo"
            placeholder="Enter your phone number"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <Input
            label="Address"
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
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
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Signup
          </button>
        </form>

        {/* Signup as Admin Option */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">Want to sign up as Admin?</p>
          <button
            onClick={() => navigate('/admin-signup')}
            className="text-blue-500 font-semibold hover:underline mt-2"
          >
            Sign up as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
