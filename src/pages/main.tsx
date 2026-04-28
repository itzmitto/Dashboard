import '../styling/main.css'

function Sidebar() {
  return (
    <div className="sidebar">  
      <h2 className="sidebar-title">DASHBOARD</h2>
      <ul className="sidebar-menu">
        <li>Home</li>
        <li>Rooster</li>
        <li>Taken</li>
        <li>Profiel</li>
        <li>Cijfers</li>
        <li>profiel</li>
        <li>Settings</li>
      </ul> 
    </div>
  )
}




function Main() {
  return (
    <div className="layout">
        <Sidebar /> 


      



      <div className="main-page">
        <h1>Dit is het begin</h1>
        <p>Welkom op je mijn school dashboard</p>
      </div>



    </div>
  )
}

export default Main 
