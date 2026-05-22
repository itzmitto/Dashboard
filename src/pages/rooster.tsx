import '../styling/rooster.css'; 

interface Vak {
  naam: string;
  code: string;
  lokaal: string;
  start: string;
  eind: string;
  tag: string;
}

interface DagKaart {
  dag: string;
  vakken: Vak[];
}

const roosterData: DagKaart[] = [
  {
    dag: 'Maandag',
    vakken: [{ naam: 'Zelfstudie & Begeleiding', code: 'FLEX', lokaal: 'Groen 2.073', start: '08:30', eind: '17:00', tag: 'Fullday' }],
  },
  {
    dag: 'Dinsdag',
    vakken: [{ naam: 'Zelfstudie & Begeleiding', code: 'FLEX', lokaal: 'Groen 2.073', start: '08:30', eind: '17:00', tag: 'Fullday' }],
  },
  {
    dag: 'Woensdag',
    vakken: [{ naam: 'Zelfstudie & Rekenen', code: 'FLEX + REKENEN', lokaal: 'Groen 2.073', start: '08:30', eind: '17:00', tag: 'Fullday' }],
  },
  {
    dag: 'Donderdag',
    vakken: [{ naam: 'Nederlands & Burgerschap', code: 'FLEX / NL / BURG.', lokaal: 'Groen 2.073', start: '08:30', eind: '17:00', tag: 'Fullday' }],
  },
  {
    dag: 'Vrijdag',
    vakken: [{ naam: 'Zelfstudie', code: 'FLEX', lokaal: 'Groen 2.073', start: '08:30', eind: '13:30', tag: 'Halve Dag' }],
  },
];

const DAG_NAMEN = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag'] as const;

function DagShape({ index }: { index: number }) {
  const dag = DAG_NAMEN[index];
  return (
    <>
      <div className={`rg-shape rg-shape--${dag}-1`} />
      <div className={`rg-shape rg-shape--${dag}-2`} />
      <div className={`rg-shape rg-shape--${dag}-3`} />
    </>
  );
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