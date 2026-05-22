import '../styling/rooster.css';

interface DagKaart {
  dag: string;
  vakken: {
    naam: string;
    code: string;
    lokaal: string;
    start: string;
    eind: string;
    tag: string;
  }[];
}

const roosterData: DagKaart[] = [
  {
    dag: 'Maandag',
    vakken: [
      { naam: 'Zelfstudie & Begeleiding', code: 'FLEX', lokaal: 'Groen 2.073', start: '08:30', eind: '17:00', tag: 'Fullday' },
    ],
  },
  {
    dag: 'Dinsdag',
    vakken: [
      { naam: 'Zelfstudie & Begeleiding', code: 'FLEX', lokaal: 'Groen 2.073', start: '08:30', eind: '17:00', tag: 'Fullday' },
    ],
  },
  {
    dag: 'Woensdag',
    vakken: [
      { naam: 'Zelfstudie & Rekenen', code: 'FLEX + REKENEN', lokaal: 'Groen 2.073', start: '08:30', eind: '17:00', tag: 'Fullday' },
    ],
  },
  {
    dag: 'Donderdag',
    vakken: [
      { naam: 'Nederlands & Burgerschap', code: 'FLEX / NL / BURG.', lokaal: 'Groen 2.073', start: '08:30', eind: '17:00', tag: 'Fullday' },
    ],
  },
  {
    dag: 'Vrijdag',
    vakken: [
      { naam: 'Zelfstudie', code: 'FLEX', lokaal: 'Groen 2.073', start: '08:30', eind: '13:30', tag: 'Halve Dag' },
    ],
  },
];

function DagShape({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <>
          <div className="rg-shape" style={{ top: 15, left: 20, width: 60, height: 60, background: 'var(--red)', transform: 'rotate(-8deg)' }} />
          <div className="rg-shape" style={{ top: 30, right: 10, width: 40, height: 40, background: 'var(--ink)', clipPath: 'polygon(50% 0%,100% 100%,0% 100%)' }} />
          <div className="rg-shape" style={{ bottom: 5, left: 50, width: 30, height: 30, border: '3px solid var(--ink)', borderRadius: '50%' }} />
        </>
      );
    case 1:
      return (
        <>
          <div className="rg-shape" style={{ top: 10, right: 15, width: 55, height: 55, background: 'var(--orange)', transform: 'rotate(12deg)' }} />
          <div className="rg-shape" style={{ bottom: 10, left: 15, width: 45, height: 25, background: 'var(--ink)' }} />
          <div className="rg-shape" style={{ top: 50, left: 40, width: 25, height: 25, border: '3px solid var(--orange)', transform: 'rotate(45deg)' }} />
        </>
      );
    case 2:
      return (
        <>
          <div className="rg-shape" style={{ top: 5, left: 10, width: 70, height: 40, background: 'var(--cyan)' }} />
          <div className="rg-shape" style={{ bottom: 0, right: 0, width: 50, height: 70, background: 'var(--ink)' }} />
          <div className="rg-shape" style={{ top: 35, left: 55, width: 30, height: 30, background: 'var(--paper)', borderRadius: '50%' }} />
        </>
      );
    case 3:
      return (
        <>
          <div className="rg-shape" style={{ bottom: 0, left: 0, width: 80, height: 50, background: 'var(--magenta)', transform: 'skewX(-10deg)' }} />
          <div className="rg-shape" style={{ top: 10, right: 10, width: 35, height: 80, background: 'var(--ink)' }} />
          <div className="rg-shape" style={{ top: 20, left: 25, width: 40, height: 4, background: 'var(--magenta)', transform: 'rotate(-20deg)' }} />
        </>
      );
    case 4:
      return (
        <>
          <div className="rg-shape rg-shape--triangle" />
          <div className="rg-shape" style={{ bottom: 10, left: 10, width: 40, height: 40, background: 'var(--ink)', borderRadius: '50%' }} />
          <div className="rg-shape" style={{ top: 20, left: 20, width: 50, height: 3, background: 'var(--ink)' }} />
        </>
      );
    default:
      return null;
  }
}

function Rooster() {
  return (
    <div className="rooster-page">
      <div className="topbar">
        <div className="tb-left">
          <span className="tb-chapter">02 —</span>
          <span className="tb-title">ROOSTER</span>
        </div>
        <div className="tb-right">
          <span className="tb-tag">Groen 2.073</span>
          <span className="tb-tag">XSB1B</span>
        </div>
      </div>
      <div className="rooster-grid">
        {roosterData.map((dag, i) => (
          <div className="rg-card" key={dag.dag}>
            <div className="rg-painting">
              <DagShape index={i} />
            </div>
            <div className="rg-head">{dag.dag}</div>
            <div className="rg-body">
              {dag.vakken.map((vak) => (
                <div key={vak.code}>
                  <div className="rg-time">{vak.start}</div>
                  <div className="rg-sep">— TOT —</div>
                  <div className="rg-time">{vak.eind}</div>
                  <div className="rg-ruler" />
                  <div className="rg-room">{vak.lokaal}</div>
                  <div className="rg-vak">{vak.code}</div>
                  <div className="rg-tag">{vak.tag}</div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Rooster; 