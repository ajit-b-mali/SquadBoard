import { NavLink } from "react-router-dom";

function Logo() {
    return (
        <h2 className="text-2xl font-bold">
            <span className="text-blue-600">Squad</span>Board
        </h2>
    );
}

function Header() {
    return (
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <NavLink to="/" className="flex items-center gap-2">
                    <Logo />
                </NavLink>

                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
                    <a href="#hero" className="hover:text-blue-600">Overview</a>
                    <a href="#features" className="hover:text-blue-600">Features</a>
                    <a href="#cta" className="hover:text-blue-600">Get started</a>
                    <NavLink to="/dashboard" className="hover:text-blue-600">Live demo</NavLink>
                </nav>

                <div className="flex items-center gap-3">
                    <NavLink
                        to="/login"
                        className="hidden md:inline px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                        Sign in
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition"
                    >
                        Get started
                    </NavLink>
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
                    <NavLink to="/" className="inline-flex items-center gap-2">
                        <Logo />
                    </NavLink>
                    <p className="text-sm text-gray-400">
                        Simple, collaborative boards to keep your squad shipping together.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">Product</h4>
                    <div className="flex flex-col gap-2">
                        <a href="#hero" className="hover:text-white">Overview</a>
                        <a href="#features" className="hover:text-white">Features</a>
                        <a href="#cta" className="hover:text-white">Get started</a>
                        <NavLink to="/dashboard" className="hover:text-white">Live demo</NavLink>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">Account</h4>
                    <div className="flex flex-col gap-2">
                        <NavLink to="/login" className="hover:text-white">Sign in</NavLink>
                        <NavLink to="/register" className="hover:text-white">Create account</NavLink>
                        <NavLink to="/profile" className="hover:text-white">Profile</NavLink>
                        <NavLink to="/support" className="hover:text-white">Support</NavLink>
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
        { title: "Plan sprints", desc: "Organize work with boards, swimlanes, and checklists." },
        { title: "Collaborate", desc: "Assign tasks, mention teammates, and keep everyone aligned." },
        { title: "Ship faster", desc: "Track progress with velocity charts and burn-down metrics." },
        { title: "Automate rituals", desc: "Trigger standup digests and QA checklists with one click." },
        { title: "Template anything", desc: "Kick off projects faster with ready-to-use board templates." },
        { title: "Stay secure", desc: "Role-based access, audit trails, and SSO-ready." },
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
                                Stay organized, ship together, celebrate wins.
                            </h1>
                            <p className="text-lg text-gray-600">
                                Boards, tasks, and insights in one place. Perfect for agile teams that want clarity without clutter.
                            </p>
                            <div className="flex gap-4">
                                <NavLink
                                    to="/register"
                                    className="px-5 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                                >
                                    Get started
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className="px-5 py-3 border border-gray-300 rounded-md font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
                                >
                                    Sign in
                                </NavLink>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
                                {[{
                                    label: "Teams on SquadBoard",
                                    value: "2.8k"
                                }, {
                                    label: "Tasks shipped",
                                    value: "480k"
                                }, {
                                    label: "Sprint velocity uplift",
                                    value: "+18%"
                                }, {
                                    label: "Avg. time saved",
                                    value: "6h/wk"
                                }].map((stat) => (
                                    <div key={stat.label} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                                        <p className="text-xs uppercase font-semibold text-gray-500">{stat.label}</p>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                                </div>
                                <p className="text-sm font-semibold text-gray-500">Sprint: Onboarding</p>
                            </div>
                            <div className="space-y-3">
                                {["Design landing", "Set up API", "QA checklist"].map((task) => (
                                    <div
                                        key={task}
                                        className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-lg border border-gray-100"
                                    >
                                        <p className="font-semibold text-gray-800">{task}</p>
                                        <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                            In progress
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="features">
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <h2 className="text-3xl font-bold text-gray-900">Built for modern product teams</h2>
                            <p className="text-lg text-gray-600">
                                Ship rituals, not chaos. SquadBoard keeps everyone in sync with simple workflows and powerful insights.
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
                                        <p className="text-sm uppercase font-semibold text-blue-600">Weekly ritual</p>
                                        <p className="text-base font-semibold text-gray-900">Plan → Execute → Celebrate</p>
                                    </div>
                                </div>
                                <div className="space-y-3 text-sm text-gray-700">
                                    {["Set the sprint goals and owners", "Auto-create QA and launch checklists", "Notify channels with status + blockers", "Review the burn-down and velocity delta"].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                                    <p className="text-sm text-blue-900 font-semibold">Teams see an average +18% velocity after three cycles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="cta">
                    <div className="text-center space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">Ready to get your squad aligned?</h3>
                        <p className="text-lg text-gray-600">
                            Create a workspace in minutes, invite your team, and keep every sprint on one page.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <NavLink
                                to="/register"
                                className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                            >
                                Start for free
                            </NavLink>
                            <NavLink
                                to="/dashboard"
                                className="px-6 py-3 border border-gray-300 rounded-md font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
                            >
                                View demo
                            </NavLink>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-600">
                            {["No credit card", "Live demo with data", "Cancel anytime"].map((item) => (
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