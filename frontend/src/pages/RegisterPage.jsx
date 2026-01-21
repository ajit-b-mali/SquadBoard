import { useState } from 'react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(new FormData(e.target).json());
        console.log('Submitting form data:', formData);
    }

    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md w-96 space-y-4'>
                <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Join SquadBoard</h2>
                <div>
                    <label htmlFor="user-name" className='block text-gray-700'>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="jdoe"
                        onChange={handleChange}
                        required
                        className='border border-gray-300 p-2 w-full rounded mt-1'
                    />
                </div>

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
                    Register
                </button>
            </form>
        </div>
    );
}