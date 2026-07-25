import './Header.css';

export default function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    <img src="/logo.png" alt="Phoenix logo" className="navbar-logo-icon" />
                </a>
            </div>
        </nav>
    );
}