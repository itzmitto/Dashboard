import '../styling/profiel.css';

function Profiel() {
    return (
        <div className="profiel-page">
            <div className="gridContainer">
                <div className="titleBlock">
                    <h1>Profiel</h1>
                    <h2>Dit is mijn profiel pagina</h2>
                </div>

                <div className="cardsContainer">
                    <div className="card">
                        <h1>Naam</h1>
                        <h2>Jouw naam hier</h2>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profiel;