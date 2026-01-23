import { useState } from 'react';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // handle login logic here

        console.log(formData);
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

                <button className='bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 transition'>
                    Login
                </button>
            </form>
        </div>
    );
}