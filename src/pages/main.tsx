import '../styling/main.css'
import { Link, Outlet, useLocation } from 'react-router-dom'

export function HomeContent() {
  return (
    <div className="page-content">
      <div className="topbar">
        <div className="tb-left">
          <span className="tb-chapter">01 —</span>
          <span className="tb-title">HOME</span>
        </div>
        <div className="tb-right">
          <span className="tb-tag">XSB1B</span>
          <span className="tb-tag">Week 19</span>
          <span className="tb-tag red">Live</span>
        </div>
      </div>

      <div className="home-hero">
        <div className="hero-cell">
          <div className="hc-slash hc-s1"></div>
          <div className="hc-accent">3</div>
          <div className="hc-value">3</div>
          <div className="hc-label">Open Taken</div>
          <div className="hc-sub">2 zijn urgent</div>
        </div>
        <div className="hero-cell">
          <div className="hc-slash hc-s2"></div>
          <div className="hc-accent">7.5</div>
          <div className="hc-value">7.5</div>
          <div className="hc-label">Gem. Cijfer</div>
          <div className="hc-sub">Semester II</div>
        </div>
        <div className="hero-cell">
          <div className="hc-slash hc-s3"></div>
          <div className="hc-accent">5</div>
          <div className="hc-value">5</div>
          <div className="hc-label">Vakken</div>
          <div className="hc-sub">3 afgerond</div>
        </div>
        <div className="hero-cell">
          <div className="hc-slash hc-s4"></div>
          <div className="hc-accent">6</div>
          <div className="hc-value">6</div>
          <div className="hc-label">Weken tot Examen</div>
          <div className="hc-sub">Op schema</div>
        </div>
      </div>

      <div className="home-week">
        <div className="week-col">
          <div className="wc-day">Maandag</div>
          <div className="wc-body">
            <div className="wc-subj">Flex</div>
            <div className="wc-time">08:30 — 17:00</div>
            <div className="wc-room">Groen 2.073</div>
            <div className="wc-bar"></div>
          </div>
        </div>
        <div className="week-col">
          <div className="wc-day">Dinsdag</div>
          <div className="wc-body">
            <div className="wc-subj">Flex</div>
            <div className="wc-time">08:30 — 17:00</div>
            <div className="wc-room">Groen 2.073</div>
            <div className="wc-bar"></div>
          </div>
        </div>
        <div className="week-col">
          <div className="wc-day">Woensdag</div>
          <div className="wc-body">
            <div className="wc-subj">Flex & Rekenen</div>
            <div className="wc-time">08:30 — 17:00</div>
            <div className="wc-room">Groen 2.073</div>
            <div className="wc-bar"></div>
          </div>
        </div>
        <div className="week-col">
          <div className="wc-day">Donderdag</div>
          <div className="wc-body">
            <div className="wc-subj">Flex + NL</div>
            <div className="wc-time">08:30 — 17:00</div>
            <div className="wc-room">Groen 2.073</div>
            <div className="wc-bar"></div>
          </div>
        </div>
        <div className="week-col">
          <div className="wc-day">Vrijdag</div>
          <div className="wc-body">
            <div className="wc-subj">Flex</div>
            <div className="wc-time">08:30 — 13:30</div>
            <div className="wc-room">Groen 2.073</div>
            <div className="wc-bar"></div>
          </div>
        </div>
      </div>

      <div className="home-bottom">
        <div className="hb-panel">
          <div className="hb-title">
            Taken Deze Week
            <span className="hb-count">3</span>
          </div>
          <div className="task-row">
            <div className="tr-dot urgent"></div>
            <span className="tr-name">UML Diagram afmaken</span>
            <span className="tr-badge tb-u">Urgent</span>
          </div>
          <div className="task-row">
            <div className="tr-dot soon"></div>
            <span className="tr-name">Portfolio bijwerken</span>
            <span className="tr-badge tb-s">Spoedig</span>
          </div>
          <div className="task-row">
            <div className="tr-dot later"></div>
            <span className="tr-name">GitHub README schrijven</span>
            <span className="tr-badge tb-l">Later</span>
          </div>
          <div className="task-row">
            <div className="tr-dot done"></div>
            <span className="tr-name done">Retrospective inleveren</span>
            <span className="tr-badge tb-d">Klaar</span>
          </div>
          <div className="task-row">
            <div className="tr-dot done"></div>
            <span className="tr-name done">Dashboard website styling beter maken</span>
            <span className="tr-badge tb-d">Klaar</span>
          </div>
          <div className="task-row">
            <div className="tr-dot done"></div>
            <span className="tr-name done">Portfolio website online zetten met github</span>
            <span className="tr-badge tb-d">Klaar</span>
          </div>
          <div className="task-row">
            <div className="tr-dot done"></div>
            <span className="tr-name done">Movie website mee beginnen en op github zetten</span>
            <span className="tr-badge tb-d">Klaar</span>
          </div>
        </div>
        <div className="hb-panel">
          <div className="hb-title">Notities & Info</div>
          <div className="info-row">
            <span className="ir-glyph">▶</span>
            <span className="ir-text">Volgende les: <strong>Maandag 08:30</strong> Flex in lokaal 2.073</span>
          </div>
          <div className="info-row">
            <span className="ir-glyph">▶</span>
            <span className="ir-text">Gemiddeld cijfer: <strong>7.5</strong> goed op schema</span>
          </div>
          <div className="info-row">
            <span className="ir-glyph">▶</span>
            <span className="ir-text">Moet nog een stageplek vinden</span>
          </div>
          <div className="info-row">
            <span className="ir-glyph">▶</span>
            <span className="ir-text">Examen na de tweede stage</span>
          </div>
          <div className="info-row">
            <span className="ir-glyph">▶</span>
            <span className="ir-text">4 van 5 doelen afgerond dit schooljaar</span>
          </div>
          <div className="info-row">
            <span className="ir-glyph">▶</span>
            <span className="ir-text">Beginnen met een nieuwe project over een movie website</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const navItems = [
  { num: '01', label: 'Home', to: '/main' },
  { num: '02', label: 'Rooster', to: '/main/rooster' },
  { num: '03', label: 'Taken', to: '/main/taken' },
  { num: '04', label: 'Leraren', to: '/main/leraren' },
  { num: '05', label: 'Cijfers', to: '/main/cijfers' },
  { num: '06', label: 'Profiel', to: '/main/profiel' },
  { num: '07', label: 'Settings', to: '/main/settings' },
]

function Sidebar() {
  const location = useLocation()

  const isActive = (to: string) => {
    if (to === '/main') return location.pathname === '/main'
    return location.pathname.startsWith(to)
  }

  return (
    <nav className="sidebar">
      <div className="sb-logo">
        <Link to="/main" className="sb-logo-main">DASH</Link>
        <div className="sb-logo-sub">Student Portal v2.6</div>
        <div className="sb-logo-bar"></div>
      </div>

      <div className="sb-label">Navigation</div>

      <ul className="sidebar-menu">
        {navItems.map((item) => (
          <li key={item.to} className={isActive(item.to) ? 'active' : ''}>
            <Link to={item.to}>
              <span className="nav-num">{item.num}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sb-bottom">
        <div className="sb-user">
          <div className="sb-avatar">AB</div>
          <div className="sb-user-name">
            <strong>André Babirian</strong>
            ICT Softw. Dev · Yr1
          </div>
        </div>
      </div>
    </nav>
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