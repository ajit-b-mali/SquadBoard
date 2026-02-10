import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        try {
            const API_URL = import.meta.env.VITE_API_URL;
            const res = await axios.post(`${API_URL}/auth/register`, formData);
            res.data && navigate('/login');
        } catch(err) {
            setError(true);
            console.log(err);
        }
    }

return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Join SquadBoard</h2>
        
        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            name="username"
            type="text" 
            placeholder="johndoe"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            name="email"
            type="email" 
            placeholder="john@example.com"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            name="password"
            type="password" 
            placeholder="********"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />
        </div>

        {error && <span className="text-red-500 text-sm block mb-4 text-center">Something went wrong!</span>}

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition font-semibold">
          Create Account
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}