import '../styling/rooster.css'

function Rooster() {
  return (
    <div className="rooster-page">
      <div className="wrapper">
        <div className="gridContainer">
          <div className="titleBlock">
            <h1>School Rooster</h1>
            <h2>Dit is mijn schoolrooster voor de week</h2>
          </div>

          <div className="cardsContainer">
            <div className="card main">
              <h1>Maandag</h1>
              <h2>08:30 tot 17:00</h2>
              <h3>lokaal Groen 2073</h3>
              <h4>Vak Flex</h4>
            </div>
          </div>

          <div className="card second">
            <h1>Dinsdag</h1>
            <h2>08:30 tot 17:00</h2>
            <h3>lokaal Groen 2073</h3>
            <h4>Vak Flex</h4>
          </div>
        </div>

        <div className="card third">
          <h1>Woensdag</h1>
          <h2>08:30 tot 17:00</h2>
          <h3>lokaal Groen 2073</h3>
          <h4>Vak Flex</h4>
        </div>
      </div>

      <div className="card fourth">
        <h1>Donderdag</h1>
        <h2>08:30 tot 17:00</h2>
        <h3>lokaal Groen 2073</h3>
        <h4>Vak Flex</h4>
      </div>


      <div className="card fifth">
        <h1>Vrijdag</h1>
        <h2>08:30 tot 13:30</h2>
        <h3>lokaal Groen 2073</h3>
        <h4>Vak Flex</h4>
      </div>



    </div>
  );
}


export default Rooster
