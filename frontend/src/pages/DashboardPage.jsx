import { useState } from "react";
import Header from "../components/Header";

export default function DashboardPage() {
    const stats = {
        tasksTotal: 12,
        tasksCompleted: 7,
        completionRate: Math.round((7 / 12) * 100),
    };

    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "john@example.com"
    })

    function handleProfileChange(e) {
        const { name, value } = e.target;
        setProfile((p) => ({ ...p, [name]: value }));
    }

    function handleSaveProfile(e) {
        e.preventDefault();
        console.log("Profile saved:", profile);
    }

    function handleLogout() {
        console.log("Logging out...");
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header userName={profile.name} onLogout={handleLogout}/>
            <main className="p-6 space-y-6">
                {/* Overview / Stats */}
                <section>
                    <h1 className="text-2xl text-blue-600 font-bold mb-4">Dashboard</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white shadow rounded p-4">
                            <p className="text-gray-500 text-sm">Total Tasks</p>
                            <p className="text-2xl font-semibold">{stats.tasksTotal}</p>
                        </div>
                        <div className="bg-white shadow rounded p-4">
                            <p className="text-gray-500 text-sm">Tasks Completed</p>
                            <p className="text-2xl font-semibold">{stats.tasksCompleted}</p>
                        </div>
                        <div className="bg-white shadow rounded p-4">
                            <p className="text-gray-500 text-sm">Completion Rate</p>
                            <p className="text-2xl font-semibold">{stats.completionRate}%</p>
                        </div>
                    </div>
                </section>
                <section className="bg-white shadow rounded p-4">
                    <h2 className="text-lg font-semibold mb-3">Profile & Settings</h2>
                    <form onSubmit={handleSaveProfile} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={profile.name}
                                onChange={handleProfileChange}
                                className="border border-gray-300 p-2 w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profile.email}
                                onChange={handleProfileChange}
                                className="border border-gray-300 p-2 w-full"
                            />
                        </div>
                        <button className="block ml-auto bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 transition rounded">
                            Save
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
}