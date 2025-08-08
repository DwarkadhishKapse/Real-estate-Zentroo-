import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '123') {
      login(username); // Save user to context
      toast.success('Login Successful!');
      setTimeout(() => {
        navigate('/');
      }, 1000); // Redirect to home after short delay
    } else {
      toast.error('Invalid login credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="shadow-md p-8 bg-white text-center w-[28rem] rounded-3xl shadow-gray-400">
        <h1 className="text-2xl font-semibold mb-6">Sign in form</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg"
        />

        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-3 rounded-lg">
          Sign In
        </button>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Signup;
