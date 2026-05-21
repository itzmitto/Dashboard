import '../styling/profiel.css'

const skills = [
    { name: 'React-TypeScript' },
    { name: 'Html' },
    { name: 'JavaScript' },
    { name: 'Laravel' },
    { name: 'Vue' },
    { name: 'Svelte' },
    { name: 'PHP' },
    { name: 'MySQL' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'CSS' },
]

export function ProfielContent() {
    return (
        <div className="page-content">
            <div className="topbar">
                <div className="tb-left">
                    <span className="tb-chapter">06 —</span>
                    <span className="tb-title">PROFIEL</span>
                </div>
                <div className="tb-right">
                    <span className="tb-tag">Student</span>
                    <span className="tb-tag red">Actief</span>
                </div>
            </div>
            <div className="pf-body">
                <div className="pf-main">
                    <div className="pf-bgletter">A</div>

                    <div className="pf-eyebrow">Student / Jaar I / XSB1B</div>
                    <div className="pf-name">
                        ANDRÉ<br />BABIRIAN
                    </div>
                    <div className="pf-title">ICT Software Developer Deltion College</div>
                    <div className="pf-details">
                        <div className="pf-row">
                            <span className="pf-key">School</span>
                            <span className="pf-val">Deltion College, Zwolle</span>
                        </div>
                        <div className="pf-row">
                            <span className="pf-key">Opleiding</span>
                            <span className="pf-val">ICT Software Developer</span>
                        </div>
                        <div className="pf-row">
                            <span className="pf-key">Klas</span>
                            <span className="pf-val">XSB1B / 2025</span>
                        </div>
                        <div className="pf-row">
                            <span className="pf-key">Studiejaar</span>
                            <span className="pf-val">2025 / 2026 — Semester II</span>
                        </div>
                        <div className="pf-row">
                            <span className="pf-key">Status</span>
                            <span className="pf-val">Actief op schema</span>
                        </div>
                    </div>
                </div>
                <div className="pf-stats">
                    <div className="pf-stat">
                        <div className="pf-slash pf-slash-0" />
                        <div className="pf-stat-val">7.5</div>
                        <div className="pf-stat-lbl">Gemiddeld Cijfer</div>
                    </div>
                    <div className="pf-stat">
                        <div className="pf-slash pf-slash-1" />
                        <div className="pf-stat-val">2/6</div>
                        <div className="pf-stat-lbl">Vakken Klaar</div>
                    </div>
                    <div className="pf-stat">
                        <div className="pf-slash pf-slash-2" />
                        <div className="pf-stat-val">2</div>
                        <div className="pf-stat-lbl">Weken tot Examen</div>
                    </div>
                </div>
            </div>
            <div className="pf-skills">
                <div className="pf-skills-title">
                    Vaardigheden
                </div>
                <div className="pf-skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.name} className="pf-skill-card">
                            <h3 className="pf-skill-name">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfielContent