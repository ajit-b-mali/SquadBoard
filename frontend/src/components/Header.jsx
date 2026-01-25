import { NavLink } from 'react-router-dom';

export default function Header({ userName = "Guest", onLogout = () => console.log("Logout out!") }) {
    const initials = userName?.trim()?.[0].toUpperCase() || "U";

    const navLinkClass = ({ isActive }) => {
        return `px-3 py-2 rounded text-sm font-medium ${
            isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
        }`
    };

    return (
        <header className='bg-white shadow'>
            <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
                <div className='flex items-center gap-6'>
                    <NavLink to="/dashboard" className="text-xl font-bold text-blue-600">
                        SquadBoard
                    </NavLink>
                    <nav className='flex items-center gap-2'>
                        <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
                        <NavLink to="/profile" className={navLinkClass}>Tasks</NavLink>
                        <NavLink to="/settings" className={navLinkClass}>Settings</NavLink>
                    </nav>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-2'>
                        <div className='flex h-9 w-9 items-center justify-center bg-blue-600 text-white rounded-full font-semibold'>{initials}</div>
                        <span className='text-sm font-medium text-gray-800'>{userName}</span>
                    </div>
                    <button onClick={onLogout} className='bg-red-500 rounded px-3 py-2 text-sm font-medium hover:bg-red-600 transition'>Logout</button>
                </div>
            </div>
        </header>
    );
}