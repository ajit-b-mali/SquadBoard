import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            const res = await axios.post(`${API_URL}/auth/login`, formData);
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate('/dashboard');
        } catch(err) {
            setError(true);
            console.error('Login failed:', err);
        }
    }

    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md w-96 space-y-4'>
                <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Welcome Back to SquadBoard</h2>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder='john@example.com'
                        onChange={handleChange}
                        required
                        className='border border-gray-300 p-2 w-full rounded mt-1'
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='********'
                        onChange={handleChange}
                        required
                        className='border border-gray-300 p-2 w-full rounded mt-1'
                    />
                </div>

                {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}

                <button className='bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 transition font-semibold'>
                    Login
                </button>

                <p className='text-center text-gray-600'>
                    New here? <Link to="/register" className='text-blue-600 hover:underline'>Create an account</Link>
                </p>
            </form>
        </div>
    );
}