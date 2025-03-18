import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../../services/user/authService'
import { loginStart, loginSuccess, loginFailure } from '../../store/authSlice';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
    dispatch(loginStart());
    
    try {
      // Replace with actual login API request
      const response = await loginUser(formData);
      console.log("login",response.data.user)
      dispatch(loginSuccess(response.data.user)); // Assuming response contains user data
      navigate('/');
    } catch (err) {
      dispatch(loginFailure(err.message));
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
      <div className="mt-4 text-center">
          <p className="text-gray-600">Want to login as Admin?</p>
          <button
            onClick={() => navigate('/admin-login')}
            className="text-blue-500 font-semibold hover:underline mt-2"
          >
            login as Admin
          </button>
        </div>
    
    </div>
  </div>
  );
};

export default Login;
