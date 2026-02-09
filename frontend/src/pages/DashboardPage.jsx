// frontend/src/pages/DashboardPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { use } from "react";

export default function DashboardPage() {
    const navigate = useNavigate();

    // 1. Lazy initialization: Grab user before the first render
    const [user, setUser] = useState(() => {
        try {
            const saved = localStorage.getItem('user');
            return saved ? JSON.parse(saved) : null;
        } catch (err) {
            console.error('User data is corrupted:', err);
            localStorage.removeItem('user');
            return null;
        }
    });

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // 2. Security Check: If no user, bounce to login
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    // 3. Fetch Tasks: Only runs when the component mounts or user ID changes
    useEffect(() => {
        if (!user?._id) return;

        const fetchTasks = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/tasks?userId=${user._id}`);
                setTasks(res.data);
            } catch(err) {
                console.error('Failed to fetch tasks:', err);
            }
        };

        fetchTasks();
    }, [user?._id]);

    // 4. Task Actions: Add, Move, Delete, Logout
    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!newTask) return;

        try {
            const res = await axios.post('http://localhost:5000/api/tasks', {
                title: newTask,
                owner: user._id
            });
            setTasks([res.data, ...tasks]);
            setNewTask("");
        } catch(err) {
            console.error(err);
        }
    }

    const handleMoveTask = async (taskId, currentStatus, direction) => {
        const statusOrder = ['todo', 'doing', 'done'];
        const currentIndex = statusOrder.indexOf(currentStatus);
        const nextIndex = currentIndex + direction;

        if (nextIndex >= 0 && nextIndex < statusOrder.length) {
            const newStatus = statusOrder[nextIndex];
            try {
                const updatedTasks = tasks.map((t) => 
                    t._id === taskId ? { ...t, status: newStatus } : t
                );
                setTasks(updatedTasks);

                // call server
                const API_URL = process.env.VITE_API_URL || 'http://localhost:5000';
                await axios.put(`${API_URL}/api/tasks/${taskId}`, {
                    status: newStatus
                });
            } catch(err) {
                console.error('Failed to move task:', err);
            }
        }
    };

    const handleDelete = async (taskId) => {
        try {
            const API_URL = process.env.VITE_API_URL || 'http://localhost:5000';
            await axios.delete(`${API_URL}/api/tasks/${taskId}`);
            setTasks(tasks.filter((t) => t._id !== taskId));
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const getTasksByStatus = (status) => tasks.filter((t) => t.status === status);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    SquadBoard
                </h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-600">Hello, {user?.username}</span>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </div>

            {/* Add Task Input */}
            <form onSubmit={handleAddTask} className="flex mb-8 gap-2">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-1 p-3 rounded shadow border border-gray-200"
                />
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded shadow font-bold hover:bg-blue-700">
                    Add
                </button>
            </form>

            {/* Kanvan Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Column 1: TODO */}
                <TaskColumn
                    title="To Do"
                    tasks={getTasksByStatus('todo')}
                    onMove={handleMoveTask}
                    onDelete={handleDelete}
                    color="bg-yellow-100"
                />

                {/* Column 2: DOING */}
                <TaskColumn
                    title="Doing"
                    tasks={getTasksByStatus('doing')}
                    onMove={handleMoveTask}
                    onDelete={handleDelete}
                    color="bg-blue-100"
                />

                {/* Done */}
                <TaskColumn
                    title="Done"
                    tasks={getTasksByStatus('done')}
                    onMove={handleMoveTask}
                    onDelete={handleDelete}
                    color="bg-green-100"
                />
            </div>
        </div>
    );
}

function TaskColumn({ title, tasks, onMove, onDelete, color }) {
    return (
        <div className={`p-4 rounded-xl shadow-inner ${color} min-h-[400px]`}>
            <h2 className="font-bold text-lg mb-4 text-gray-700 uppercase tracking-wide">
                {title}
            </h2>
            <div className="space-y-3">
                {tasks.map((task) => (
                    <div key={task._id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
                        <p className="font-medium text-gray-800 mb-2">{task.title}</p>
                        <div className="flex justify-between items-center text-sm">
                            <button
                                onClick={() => onDelete(task._id)}
                                className="text-red-400 hover:text-red-600"
                            >
                                Delete
                            </button>
                            
                            <div className="flex gap-2">
                                {task.status !== 'todo' && (
                                    <button onClick={() => onMove(task._id, task.status, -1)} className="text-gray-500 hover:text-blue-600">⬅</button>
                                )}
                                {task.status !== 'done' && (
                                    <button onClick={() => onMove(task._id, task.status, 1)} className="text-gray-500 hover:text-blue-600">➡</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
