import '../styling/main.css'

function Main() { 
  return (
    <div className="layout">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Dashboard</li>
          <li>Profiel</li>
          <li>Instellingen</li>
        </ul>
      </div>

      <div className="main-page">
        <h1>Dashboard</h1>
        <p>Welkom op je mijn school dashboard</p>
      </div>
    </div>
  )   
}

export default Main 
