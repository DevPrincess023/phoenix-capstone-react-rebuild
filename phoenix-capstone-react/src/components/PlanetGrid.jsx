import './PlanetGrid.css';

export default function PlanetGrid() {
    const planets = [
        { id: 1, name: 'Mercury', distance: '57.9 million km', image: 'https://anurella.github.io/images/planets/mercury.webp' },
        { id: 2, name: 'Venus', distance: '108.2 million km', image: 'https://anurella.github.io/images/planets/venus.webp' },
        { id: 3, name: 'Earth', distance: '149.6 million km', image: 'https://anurella.github.io/images/planets/earth.jpg' },
        { id: 4, name: 'Mars', distance: '227.9 million km', image: 'https://anurella.github.io/images/planets/mars.webp' },
        { id: 5, name: 'Jupiter', distance: '778.6 million km', image: 'https://anurella.github.io/images/planets/jupiter.webp' },
        { id: 6, name: 'Saturn', distance: '1433.5 million km', image: 'https://anurella.github.io/images/planets/saturn.webp' },
        { id: 7, name: 'Uranus', distance: '2872.5 million km', image: 'https://anurella.github.io/images/planets/uranus.webp' },
        { id: 8, name: 'Neptune', distance: '4495.1 million km', image: 'https://anurella.github.io/images/planets/neptune.webp' },
        { id: 9, name: 'Pluto', distance: '5906.4 million km', image: 'https://anurella.github.io/images/planets/pluto.webp' }
    ];

    return (
        <section id="planet-grid">
            <h2>Visualizing the Differences Between Planets</h2>
            <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how <br /> vastly different terrestrial planets are from gas giants and ice giants.</p>
            <div className="planet-grid">
                {planets.map(planet => (
                    <figure key={planet.id} className="planet-card">
                        <img src={planet.image} alt={planet.name} className="planet-image" />
                        <figcaption className="planet-caption">
                            <h3>{planet.name}</h3>
                            <p>{planet.distance}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}