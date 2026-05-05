import '../styling/main.css' 
import { Link, Outlet } from 'react-router-dom'

export function HomeContent() {
  return (
    <div className="home-page">
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
 
  )
}
function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/main" className="sidebar-title-link">
        <h2 className="sidebar-title">DASHBOARD</h2>
      </Link>

      <ul className="sidebar-menu">
        <li><Link to="/main">Home</Link></li>
        <li><Link to="/main/rooster">Rooster</Link></li>
        <li><Link to="/main/taken">Taken</Link></li>
        <li><Link to="/main/leraren">Leraren</Link></li>
        <li><Link to="/main/profiel">Profiel</Link></li>
        <li><Link to="/main/settings">Settings</Link></li>
      </ul>
    </div>
  )
}

function Main() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-page">
        <Outlet />
      </div>
    </div>
  )
}

export default Main