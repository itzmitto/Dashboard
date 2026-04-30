import '../styling/profiel.css';

function Profiel() {
    return (
        <div className="rooster-page">
            <div className="gridContainer">
                <div className="titleBlock">
                    <h1>School Rooster</h1>
                    <h2>Dit is mijn schoolrooster voor de week</h2>
                </div>

                <div className="cardsContainer">
                    <div className="card">
                        <h1>Maandag</h1>
                        <h2>08:30 tot 17:00</h2>
                        <h3>lokaal Groen 2.073</h3>
                        <h4>Vak: Flex</h4>
                    </div>

                    <div className="card">
                        <h1>Dinsdag</h1>
                        <h2>08:30 tot 17:00</h2>
                        <h3>lokaal Groen 2.073</h3>
                        <h4>Vak: Flex</h4>
                    </div>


                </div>
            </div>
        </div>

    );
}

export default Profiel;