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










// import '../styling/main.css'
// import { Link, Outlet, useLocation } from 'react-router-dom'

// const CornerSVG = () => (
//   <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M2 48 L2 2 L48 2" stroke="#8B6914" strokeWidth="2" fill="none"/>
//     <path d="M2 30 Q10 22 18 28 Q26 34 34 20 Q40 10 46 4" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.5"/>
//     <circle cx="2" cy="2" r="3" fill="#8B6914" opacity="0.7"/>
//   </svg>  
// )

// export function HomeContent() {
//   return (
//     <div className="home-page">
//       <div className="page-header">
//         <span className="ph-corner tl"><CornerSVG /></span>
//         <span className="ph-corner tr"><CornerSVG /></span>
//         <span className="ph-corner bl"><CornerSVG /></span>
//         <span className="ph-corner br"><CornerSVG /></span>
//         <div className="ph-chapter">Hoofdstuk I — Introductie</div>
//         <h1 className="ph-title">The Grand<br />Academic Register</h1>
//         <p className="ph-subtitle">School Dashboard — Windesheim · Week XIX · Anno Domini MMXXVI</p>
//       </div>

//       <div className="section-ornament">✦ ❧ ✦ ❧ ✦</div>

//       <div className="home-herald">
//         <div className="herald-cell">
//           <div className="hc-roman">IV</div>
//           <div className="hc-label">Open Taken</div>
//           <div className="hc-desc">Waarvan twee<br />urgent zijn</div>
//         </div>
//         <div className="herald-cell">
//           <div className="hc-roman">7·6</div>
//           <div className="hc-label">Gem. Cijfer</div>
//           <div className="hc-desc">Semester twee<br />2025–2026</div>
//         </div>
//         <div className="herald-cell">
//           <div className="hc-roman">V</div>
//           <div className="hc-label">Vakken</div>
//           <div className="hc-desc">Dit semester<br />in behandeling</div>
//         </div>
//         <div className="herald-cell">
//           <div className="hc-roman">VI</div>
//           <div className="hc-label">Weken tot Examen</div>
//           <div className="hc-desc">Voortgang:<br />goed op schema</div>
//         </div>
//       </div>

//       <div style={{ height: 2 }} />

//       <div className="home-timetable">
//         {[
//           { day: 'Maandag',   subject: 'Flex',           time: '08:30 — 17:00', room: '2.073' },
//           { day: 'Dinsdag',   subject: 'Flex',           time: '08:30 — 17:00', room: '2.073' },
//           { day: 'Woensdag',  subject: 'Flex & Rekenen', time: '08:30 — 17:00', room: '2.073' },
//           { day: 'Donderdag', subject: 'Flex & NL',      time: '08:30 — 17:00', room: '2.073' },
//           { day: 'Vrijdag',   subject: 'Flex',           time: '08:30 — 13:30', room: '2.073' },
//         ].map((d) => (
//           <div className="tt-day" key={d.day}>
//             <div className="tt-dayname">{d.day}</div>
//             <div className="tt-subject">{d.subject}</div>
//             <div className="tt-time">{d.time}</div>
//             <span className="tt-room">{d.room}</span>
//           </div>
//         ))}
//       </div>

//       <div style={{ height: 2 }} />

//       <div className="home-notice">
//         <div className="notice-box">
//           <div className="nb-title">✦ Aankomende Taken ✦</div>
//           <div className="notice-item">
//             <span className="notice-bullet">❧</span>
//             <span>UML diagram afmaken</span>
//             <span className="notice-urgency u-urgent">Urgent</span>
//           </div>
//           <div className="notice-item">
//             <span className="notice-bullet">❧</span>
//             <span>Portfolio bijwerken</span>
//             <span className="notice-urgency u-soon">Spoedig</span>
//           </div>
//           <div className="notice-item">
//             <span className="notice-bullet">❧</span>
//             <span>GitHub README schrijven</span>
//             <span className="notice-urgency u-later">Later</span>
//           </div>
//           <div className="notice-item">
//             <span className="notice-bullet">❧</span>
//             <span style={{ textDecoration: 'line-through', opacity: 0.5 }}>Retrospective inleveren</span>
//             <span className="notice-urgency u-done">Voltooid</span>
//           </div>
//         </div>
//         <div className="notice-box">
//           <div className="nb-title">✦ Heden's Bijzonderheden ✦</div>
//           <div className="notice-item"><span className="notice-bullet">⁂</span><span>Volgende les: Maandag 08:30 — Flex in lokaal 2.073</span></div>
//           <div className="notice-item"><span className="notice-bullet">⁂</span><span>Gemiddeld cijfer dit semester: 7.6 — uitmuntend!</span></div>
//           <div className="notice-item"><span className="notice-bullet">⁂</span><span>Semester twee loopt gestaag voort — 4 van 5 vakken voltooid</span></div>
//           <div className="notice-item"><span className="notice-bullet">⁂</span><span>Examen over zes weken — aanvang met herhaling aanbevolen</span></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const navItems = [
//   { id: 'home',     label: 'Home',         roman: 'I.',   path: '/main' },
//   { id: 'rooster',  label: 'Rooster',      roman: 'II.',  path: '/main/rooster' },
//   { id: 'taken',    label: 'Taken',        roman: 'III.', path: '/main/taken' },
//   { id: 'leraren',  label: 'Leraren',      roman: 'IV.',  path: '/main/leraren' },
//   { id: 'profiel',  label: 'Profiel',      roman: 'V.',   path: '/main/profiel' },
//   { id: 'settings', label: 'Instellingen', roman: 'VI.',  path: '/main/settings' },
// ]

// function Sidebar() {
//   const location = useLocation()

//   return (
//     <nav className="sidebar">
//       <div className="sidebar-crest">
//         <svg className="crest-svg" width="72" height="80" viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M6 8 L66 8 L66 52 Q36 76 6 52 Z" fill="rgba(139,105,20,0.1)" stroke="#8B6914" strokeWidth="1.5"/>
//           <path d="M10 11 L62 11 L62 51 Q36 72 10 51 Z" fill="none" stroke="rgba(139,105,20,0.3)" strokeWidth="0.75"/>
//           <path d="M18 8 L18 2 L24 5 L30 1 L36 5 L42 1 L48 5 L54 2 L54 8" fill="none" stroke="#C09A28" strokeWidth="1.5" strokeLinejoin="round"/>
//           <line x1="36" y1="15" x2="36" y2="55" stroke="rgba(139,105,20,0.4)" strokeWidth="0.75"/>
//           <line x1="16" y1="30" x2="56" y2="30" stroke="rgba(139,105,20,0.4)" strokeWidth="0.75"/>
//           <polygon points="36,20 44,30 36,40 28,30" fill="none" stroke="#C09A28" strokeWidth="1"/>
//           <circle cx="36" cy="30" r="3" fill="#8B6914" opacity="0.6"/>
//         </svg>
//         <div className="sidebar-school">Academisch<br />Leerregister</div>
//         <div className="sidebar-year">Anno Domini MMXXVI</div>
//       </div>

//       <div className="sidebar-nav-wrap">
//         <div className="nav-section-title">Registers</div>
//         <ul className="nav-list">
//           {navItems.map((item) => {
//             const isActive =
//               item.path === '/main'
//                 ? location.pathname === '/main' || location.pathname === '/main/'
//                 : location.pathname.startsWith(item.path)

//             return (
//               <li key={item.id} className={`nav-item${isActive ? ' active' : ''}`}>
//                 <Link to={item.path} className="nav-link">
//                   <span className="nav-roman">{item.roman}</span>
//                   {item.label}
//                 </Link>
//               </li>
//             )
//           })}
//         </ul>
//       </div>

//       <div className="sidebar-footer">
//         <p>André Babirian<br />ICT Software Developer<br />Klas XSB1B</p>
//         <div className="footer-motto">✦ Per Aspera Ad Astra ✦</div>
//       </div>
//     </nav>
//   )
// }

// function Main() {
//   return (
//     <div className="layout">
//       <Sidebar />
//       <div className="main-page">
//         <Outlet />
//       </div>
//     </div>
//   )
// }

// export default Main