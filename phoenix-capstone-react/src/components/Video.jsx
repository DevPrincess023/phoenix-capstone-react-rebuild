import './Video.css';

export default function Video() {
    return (
        <section className="planetary-section">
            <div className="container">
                <div className="video-wrapper">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        title="Planetary data visualization showing orbital paths and comparative sizes of planets in the solar system"
                        aria-label="Video showing planetary data visualization">

                        <source src="/video/video.mp4" type="video/mp4" />

                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="content">
                    <h2>How Planetary Data Helps Us <br />Understand Space</h2>
                    <p>
                        Planetary science goes beyond images. Comparing <strong>mass, diameter,
                            <br /> gravity,</strong> and <strong>density</strong>, we gain insight into how planets form, behave,
                        <br /> and interact within the solar system.
                    </p>
                </div>
            </div>
        </section>
    );
}