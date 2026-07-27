import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="about-section">
                    <h2>About</h2>
                    <p>
                        This project was redesigned and rebuilt in React by <strong>Mercy</strong>.
                        Focused on creating a functional, user-friendly solution while applying modern web
                        development practices and React architecture.
                    </p>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>
                            ©2026 Design by
                            <a href="https://amakandukwu.com/" target="_blank" rel="noopener noreferrer">
                                {' '}Amaka
                            </a>
                            {' '}&{' '}
                            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">
                                Ifeoma A
                            </a>.
                        </p>

                        <p>
                            Rebuilt by
                            <a href="https://github.com/DevPrincess023/phoenix-capstone-react-rebuild" target="_blank" rel="noopener noreferrer">
                                {' '}Mercy
                            </a>.
                            All rights reserved.
                        </p>
                    </div>

                    <div className="academy">
                        <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer">
                            TSAcademy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}