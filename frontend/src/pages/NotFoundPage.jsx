import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <>
            <div>Not Found</div>
            <p>Navigate to <Link to="/">Home</Link></p>
        </>
    );
}