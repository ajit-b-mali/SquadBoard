import { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";

function Logo() {
    return (
        <h2 className="text-2xl font-bold">
            <span className="text-blue-600">Squad</span>Board
        </h2>
    );
}

const sectionIDs = ["hero", "features", "cta"];

function Header() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px",
            }
        );

        sectionIDs.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    const linkClass = (id) =>
        `transition-colors duration-00 ${
            active === id
            ? "text-red-600 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-red-600"
            : "text-gray-600 hover:text-blue-600 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
        }`;

    return (
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <NavHashLink to="/" className="flex items-center gap-2">
                    <Logo />
                </NavHashLink>

                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
                    <NavHashLink smooth to="#hero" className={linkClass("hero")}>
                        Overview
                    </NavHashLink>
                    <NavHashLink smooth to="#features" className={linkClass("features")}>
                        Features
                    </NavHashLink>
                    <NavHashLink smooth to="#cta" className={linkClass("cta")}>
                        Get started
                    </NavHashLink>
                </nav>

                <div className="flex items-center gap-3">
                    <NavHashLink
                        to="/login"
                        className="hidden md:inline px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                        Sign in
                    </NavHashLink>
                    <NavHashLink
                        to="/register"
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition"
                    >
                        Get started
                    </NavHashLink>
                </div>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-200">
            <div className="max-w-5xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-3">
                <div className="space-y-3">
                    <NavHashLink to="/" className="inline-flex items-center gap-2">
                        <Logo />
                    </NavHashLink>
                    <p className="text-sm text-gray-400">
                        The unified task stream for your personal life and shared projects.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">Product</h4>
                    <div className="flex flex-col gap-2">
                        <a href="#hero" className="hover:text-white">Overview</a>
                        <a href="#features" className="hover:text-white">Features</a>
                        <a href="#cta" className="hover:text-white">Get started</a>
                        <NavHashLink to="/dashboard" className="hover:text-white">Live demo</NavHashLink>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">Account</h4>
                    <div className="flex flex-col gap-2">
                        <NavHashLink to="/login" className="hover:text-white">Sign in</NavHashLink>
                        <NavHashLink to="/register" className="hover:text-white">Create account</NavHashLink>
                        <NavHashLink to="/profile" className="hover:text-white">Profile</NavHashLink>
                        <NavHashLink to="/support" className="hover:text-white">Support</NavHashLink>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} SquadBoard. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {["in", "tw", "gh"].map((icon) => (
                            <span
                                key={icon}
                                className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold grid place-items-center hover:bg-blue-700 transition"
                                aria-label={icon}
                            >
                                {icon.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Section({id, children}) {
    return (
        <section
            id={id}
            className="border-b bg-gray-50 px-6 py-16 md:py-24 flex items-center justify-center scroll-mt-24"
        >
            <div className="max-w-5xl w-full">
                {children}
            </div>
        </section>
    );
}

export default function LandingPage() {
    const features = [
        { title: "Unified Stream", desc: "See your personal tasks and shared projects in one single view." },
        { title: "Context Tags", desc: "Filter by #work, #grocery, or #urgent instantly. No folder digging." },
        { title: "Share Instantly", desc: "Invite a friend to a single task or list without creating a whole 'Team'." },
        { title: "Focus Mode", desc: "Hide the noise. Toggle between 'All Tasks' and 'Just Me' in one click." },
        { title: "Zero Admin", desc: "No complex boards to set up. Just type, hit enter, and get to work." },
        { title: "Mobile Ready", desc: "Perfect for capturing ideas on the go or checking off grocery items." },
    ];

    return (
        <>
            <Header />
            <main className="space-y-10 md:space-y-14">
                <Section id="hero">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-4">
                            <p className="text-blue-600 font-semibold uppercase">SquadBoard</p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Master your day,<br />alone or together.
                            </h1>
                            <p className="text-lg text-gray-600">
                                No complex boards. No hidden folders. Just one simple stream for your personal goals and shared projects.
                            </p>
                            <div className="flex gap-4">
                                <NavHashLink
                                    to="/register"
                                    className="px-5 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                                >
                                    Get started
                                </NavHashLink>
                                <NavHashLink
                                    to="/login"
                                    className="px-5 py-3 border border-gray-300 rounded-md font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
                                >
                                    Sign in
                                </NavHashLink>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                                </div>
                                <p className="text-sm font-semibold text-gray-500">My Stream</p>
                            </div>
                            <div className="space-y-3">
                                {/* Example 1: Personal Task */}
                                <div className="flex justify-between items-center px-4 py-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                                        <div>
                                            <p className="font-semibold text-gray-800">Buy Milk & Eggs</p>
                                            <p className="text-xs text-green-600 font-medium">#personal</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 2: Shared Task */}
                                <div className="flex justify-between items-center px-4 py-3 bg-blue-50 rounded-lg border border-blue-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-2 border-blue-400 rounded-full"></div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Plan Weekend Trip</p>
                                            <p className="text-xs text-blue-600 font-medium">Shared with Alex</p>
                                        </div>
                                    </div>
                                    <span className="text-xs bg-white text-blue-600 px-2 py-1 rounded shadow-sm">
                                        Active
                                    </span>
                                </div>

                                {/* Example 3: Work Task */}
                                <div className="flex justify-between items-center px-4 py-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-2 border-red-300 rounded-full"></div>
                                        <div>
                                            <p className="font-semibold text-gray-800">Finish Monthly Report</p>
                                            <p className="text-xs text-red-500 font-medium">#urgent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="features">
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <h2 className="text-3xl font-bold text-gray-900">Productivity, simplified.</h2>
                            <p className="text-lg text-gray-600">
                                Stop switching between "Work Apps" and "Life Apps." SquadBoard brings everything into one unified flow.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
                            <div className="grid md:grid-cols-2 gap-4">
                                {features.map((feature) => (
                                    <div key={feature.title} className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-bold grid place-items-center">01</div>
                                    <div>
                                        <p className="text-sm uppercase font-semibold text-blue-600">The Daily Flow</p>
                                        <p className="text-base font-semibold text-gray-900">Capture → Share → Done</p>
                                    </div>
                                </div>
                                <div className="space-y-3 text-sm text-gray-700">
                                    {["Dump all ideas into your Stream", "Add a friend to specific tasks instantly", "Filter by #urgent when you need focus", "Watch shared tasks complete in real-time"].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                                    <p className="text-sm text-blue-900 font-semibold">Spend less time organizing, more time doing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="cta">
                    <div className="text-center space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">Ready to clear your mind?</h3>
                        <p className="text-lg text-gray-600">
                            Create your personal workspace in seconds. Share only what you want, keep the rest for yourself.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <NavHashLink
                                to="/register"
                                className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                            >
                                Start for free
                            </NavHashLink>
                            <NavHashLink
                                to="/dashboard"
                                className="px-6 py-3 border border-gray-300 rounded-md font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
                            >
                                View demo
                            </NavHashLink>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-600">
                            {["No credit card", "Free for individuals", "Unlimited sharing"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}