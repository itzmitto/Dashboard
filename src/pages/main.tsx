import '../styling/main.css'
import { Link, Outlet } from 'react-router-dom'

export function HomeContent() {
  return (
    <div className="home-page">
      <div className="gridContainer">
        <div className="titleBlock">
          <h1>Home pagina</h1>
          <h2>Dit is mijn homepagina</h2>
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