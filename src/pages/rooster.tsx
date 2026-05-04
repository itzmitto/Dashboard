import '../styling/rooster.css';

function Rooster() {
  const uren = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  return (
    <div className="rooster-page">
      <div className="gridContainer">
        <div className="titleBlock">
          <h1>Academic Schedule</h1>
        </div>

        <div className="schedule-wrapper">
          <div className="time-column">
            {uren.map(tijd => <div key={tijd} className="time-slot">{tijd}</div>)}
          </div>

          <div className="cardsContainer">
            <div className="day-column">
              <span className="day-label">MONDAY</span>
              <div className="card long-card">
                <span className="course-code">FLEX</span>
                <p className="course-name">Zelfstudie & Begeleiding</p>
                <p className="location">Groen 2.073</p>
              </div>
            </div>

            <div className="day-column">
              <span className="day-label">TUESDAY</span>
              <div className="card long-card">
                <span className="course-code">FLEX</span>
                <p className="course-name">Zelfstudie & Begeleiding</p>
                <p className="location">Groen 2.073</p>
              </div>
            </div>

            