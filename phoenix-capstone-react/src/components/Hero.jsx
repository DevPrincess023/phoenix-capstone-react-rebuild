import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Explore Our Solar <br /> System Through Data
                    </h1>
                    <p className="hero-description">
                        Understand the planets not just by name, but by measurable <br />
                        facts. From size and mass to gravity and density, this page <br />
                        breaks down the solar system in a clear, data-driven way.
                    </p>
                    <div className="hero-actions">
                        <a href="#planet-grid" className="btn btn-primary">
                            Explore the Data
                        </a>
                        <a href="#form" className="btn btn-outline">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-planet-wrapper">
                        <div className="hero-planet-glow"></div>
                        <img
                            src="/hero.png"
                            alt="A glowing 3D planet Earth floating in space"
                            className="hero-planet-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}