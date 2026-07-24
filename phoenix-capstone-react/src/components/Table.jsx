import './Table.css';

export default function Table() {
    return (
        <section className="table-section">
            <h2>Planetary Facts at a Glance</h2>
            <p>Below is a comparative table of major planets in our solar system. The data highlights key physical
                <br /> properties used by astronomers and researchers worldwide.</p>

            <table>
                <caption>Data about the planets of our solar system (Planetary facts taken from NASA)</caption>
                <thead>
                    <tr>
                        <th colSpan="2"></th>
                        <th>Name</th>
                        <th>Mass (10²⁴ kg)</th>
                        <th>Diameter (km)</th>
                        <th>Density (kg/m³)</th>
                        <th>Gravity (m/s²)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="2" rowSpan="4" className="category">Terrestrial Planets</th>
                        <td>Mercury</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <td>Venus</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <td>Earth</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <td>Mars</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <th rowSpan="4" className="category">Jovian Planets</th>
                        <th rowSpan="2" className="sub-category">Gas Giants</th>
                        <td>Jupiter</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <td>Saturn</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <th rowSpan="2" className="sub-category">Ice Giants</th>
                        <td>Uranus</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <td>Neptune</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <th colSpan="2" className="category">Dwarf Planets</th>
                        <td>Pluto</td>
                        <td>0.330</td>
                        <td>4,878</td>
                        <td>5,427</td>
                        <td>3.7</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}