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
              <h1>Portfolio website</h1>
              <h2>Webapp</h2>
              <h3>This portfolio you're looking at right now built with React and TypeScript to showcase my work and skills.</h3>

            </div>
          </div>



          <div className="card second">
            <h1>Coming soon</h1>
            <h2>Project</h2>
            <h3>Building something new. Check back soon for more projects as I keep creating and coding cool things.</h3>

          </div>
        </div>



        <div className="card third">
          <h1>Digital Arts Series</h1>
          <h2>Creative</h2>
          <h3>A collection of digital paintings character designs, concept art, and experiments mixing realism with cartoon aesthetics.</h3>

        </div>
      </div>



    </div>
  );
}


export default Rooster
