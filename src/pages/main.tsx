import '../styling/main.css'
import { Link, Outlet } from 'react-router-dom'

export function HomeContent() {
  return (
    <>
      <h1>Dit is het begin</h1>
      <p>Welkom op je mijn school dashboard</p>
    </>
  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">DASHBOARD</h2>
      <ul className="sidebar-menu">
        <li><Link to="/main">Home</Link></li>
        <li><Link to="/main/rooster">Rooster</Link></li>
        <li><Link to="/main/taken">Taken</Link></li>
        <li><Link to="/main/cijfers">Cijfers</Link></li>
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