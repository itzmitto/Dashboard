import '../styling/cijfers.css';

function Cijfers() {
    return (
        <div className="page-content">
            <div className="topbar">
                <div className="tb-left">
                    <span className="tb-chapter">05 —</span>
                    <span className="tb-title">CIJFERS</span>
                </div>
                <div className="tb-right">
                    <span className="tb-tag">Semester II</span>
                    <span className="tb-tag">2025-2026</span>
                </div>
            </div>

            <div className="cijfers-grid">
                <div className="cg-panel">
                    <div className="cg-title">Behaalde Cijfers</div>

                    <div className="grade-row">
                        <span className="gr-vak">Rekenen</span>
                        <span className="gr-score high">8</span>
                    </div>
                    <div className="grade-row">
                        <span className="gr-vak">Nederlands</span>
                        <span className="gr-score high">7</span>
                    </div>
                    <div className="grade-row">
                        <span className="gr-vak">Engels</span>
                        <span className="gr-score mid">Nvt</span>
                    </div>
                    <div className="grade-row">
                        <span className="gr-vak">Eindverslag</span>
                        <span className="gr-score high">Ntv</span>
                    </div>
                </div>

                <div className="cg-panel cg-panel-right">
                    <div className="avg-display">
                        <div className="avg-num">7.6</div>
                        <div className="avg-label">Semester Gemiddelde</div>
                    </div>
                    <div className="mini-stats">
                        <div className="ms-item">
                            <div className="msi-val">4/5</div>
                            <div className="msi-lbl">Vakken Klaar</div>
                        </div>
                        <div className="ms-item">
                            <div className="msi-val">8.2</div>
                            <div className="msi-lbl">Hoogste</div>
                        </div>
                        <div className="ms-item">
                            <div className="msi-val">6.5</div>
                            <div className="msi-lbl">Laagste</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cijfers;