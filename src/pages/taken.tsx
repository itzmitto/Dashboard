import '../styling/taken.css';

function Taken() {
    return (
        <div className="page-content">
            <div className="topbar">
                <div className="tb-left">
                    <span className="tb-chapter">03 —</span>
                    <span className="tb-title">TAKEN</span>
                </div>
                <div className="tb-right">
                    <span className="tb-tag">4 Open</span>
                    <span className="tb-tag red">2 Urgent</span>
                </div>
            </div>

            <div className="taken-ledger">
                <div className="tl-header">
                    <div className="tl-h">Nr.</div>
                    <div className="tl-h">Opdracht</div>
                    <div className="tl-h">Prioriteit</div>
                    <div className="tl-h">Deadline</div>
                    <div className="tl-h">Vak</div>
                </div>

                <div className="tl-row row-urgent">
                    <div className="tl-num">01</div>
                    <div>
                        <div className="tl-name">Movie website maken met react</div>
                        <div className="tl-sub">Software Architecture</div>
                    </div>
                    <span className="tl-badge tbg-u">Urgent</span>
                    <span className="tl-dead">Morgen</span>
                    <span className="tl-vak">Coding Flex</span>
                </div>

                <div className="tl-row row-soon">
                    <div className="tl-num">02</div>
                    <div>
                        <div className="tl-name">Portfolio Bijwerken</div>
                        <div className="tl-sub">Persoonlijke Ontwikkeling</div>
                    </div>
                    <span className="tl-badge tbg-s">Spoedig</span>
                    <span className="tl-dead">Deze week</span>
                    <span className="tl-vak">Coding Flex</span>
                </div>

                <div className="tl-row row-later">
                    <div className="tl-num">03</div>
                    <div>
                        <div className="tl-name">GitHub README Schrijven</div>
                        <div className="tl-sub">Github</div>
                    </div>
                    <span className="tl-badge tbg-l">Later</span>
                    <span className="tl-dead">volgende week</span>
                    <span className="tl-vak">Coding Flex</span>
                </div>

                <div className="tl-row row-later">
                    <div className="tl-num">04</div>
                    <div>
                        <div className="tl-name">Mijn laptop en pc Github Portfolio project koppelen</div>
                        <div className="tl-sub">Github</div>
                    </div>
                    <span className="tl-badge tbg-l">Later</span>
                    <span className="tl-dead">volgende week</span>
                    <span className="tl-vak">Coding Flex</span>
                </div>

                <div className="tl-row row-done">
                    <div className="tl-num xout">05</div>
                    <div>
                        <div className="tl-name xout">Retrospective Inleveren</div>
                        <div className="tl-sub">Agile · Sprint 3</div>
                    </div>
                    <span className="tl-badge tbg-d">Klaar</span>
                    <span className="tl-dead tl-dead-done">Afgerond</span>
                    <span className="tl-vak">Coding Flex</span>
                </div>

                <div className="tl-row row-done">
                    <div className="tl-num xout">06</div>
                    <div>
                        <div className="tl-name xout">Database Schema Ontwerp</div>
                        <div className="tl-sub">Databases</div>
                    </div>
                    <span className="tl-badge tbg-d">Klaar</span>
                    <span className="tl-dead tl-dead-done">Afgerond</span>
                    <span className="tl-vak">Coding Flex</span>
                </div>
            </div>
            <div className="tl-row row-done">
                <div className="tl-num xout">07</div>
                <div>
                    <div className="tl-name xout">Movie website style ontwerpen</div>
                    <div className="tl-sub">Design</div>
                </div>
                <span className="tl-badge tbg-d">Klaar</span>
                <span className="tl-dead tl-dead-done">Afgerond</span>
                <span className="tl-vak">Coding Flex</span>
            </div>
            <div className="tl-row row-done">
                <div className="tl-num xout">08</div>
                <div>
                    <div className="tl-name xout">Movie website mee beginnen</div>
                    <div className="tl-sub">Coding</div>
                </div>
                <span className="tl-badge tbg-d">Klaar</span>
                <span className="tl-dead tl-dead-done">Afgerond</span>
                <span className="tl-vak">Coding Flex</span>
            </div>
        </div>
    );
}

export default Taken;