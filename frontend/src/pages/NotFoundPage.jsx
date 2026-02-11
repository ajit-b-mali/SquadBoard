import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    console.log(import.meta.env.VITE_API_URL);
    return (
        <>
            <div>Not Found</div>
            <p>Navigate to <Link to="/">Home</Link></p>
        </>
    );
}