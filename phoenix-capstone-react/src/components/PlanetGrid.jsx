import { useState, useEffect } from 'react';

export default function PlanetGrid() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://anurella.github.io/json/planets.json')
            .then(response => response.json())
            .then(data => {
                setPlanets(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <section>Loading planets...</section>;
    if (error) return <section>Error: {error}</section>;

    return (
        <section>
            <h2>Visualizing the Differences Between Planets</h2>
            <p>Each planet in our solar system has unique physical characteristics.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {planets.map(planet => (
                    <figure key={planet.id}>
                        <img src={planet.image} alt={planet.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
                        <figcaption>
                            <h3>{planet.name}</h3>
                            <p>{planet.distance}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}