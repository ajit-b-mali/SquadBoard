export default function DashboardPage() {
    const stats = {
        tasksTotal: 12,
        tasksCompleted: 7,
        completionRate: Math.round((7 / 12) * 100),
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
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
                <div className="mt-6 bg-white shadow rounded p-4">
                    <p className="text-lg font-semibold mb-2">Setting</p>
                    <p className="text-gray-600 text-sm">add profile/settings controls</p>
                </div>
            </div>
        </div>
    );
}