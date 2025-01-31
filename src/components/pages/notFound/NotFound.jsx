import { Link } from 'react-router';

export const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
                <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

export const ComingSoon = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Coming Soon</h1>
            <p>Sorry, the page you are looking is coming soon.</p>
            <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
                <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

