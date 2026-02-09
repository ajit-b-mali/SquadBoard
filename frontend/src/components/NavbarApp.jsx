import { Link } from 'react-router-dom';

export default function NavbarApp() {
    return (
        <header>
            <div>
                <div>

                    {/* LEFT: Logo */}
                    <div>
                        <Link to="/dashboard">
                            <div>
                                S
                            </div>
                            <span>
                                SquadBoard
                            </span>
                        </Link>
                    </div>

                    {/* RIGHT: User Avatar & Dropdown */}
                    <div>
                        {/* Add Task Button */}
                        <button>
                            + New Task
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}