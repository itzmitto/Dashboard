import '../styling/settings.css';

function Settings() {
    return (
        <div className="settings-page">

            <div className="topbar">
                <div className="tb-left">
                    <span className="tb-chapter">07 —</span>
                    <span className="tb-title">SETTINGS</span>
                </div>
                <div className="tb-right">
                    <span className="tb-tag">Preferenties</span>
                </div>
            </div>

            <div className="settings-grid">
                <div className="sg-panel">
                    <div className="sg-title">Interface</div>

                    <div className="setting-row">
                        <div className="sr-info">
                            <div className="sr-name">Dark Mode</div>
                            <div className="sr-desc">Schakel naar donker</div>
                        </div>
                        <button className="toggle-box">UIT</button>
                    </div>

                    <div className="setting-row">
                        <div className="sr-info">
                            <div className="sr-name">Compacte Weergave</div>
                            <div className="sr-desc">Minder witruimte in de pagina</div>
                        </div>
                        <button className="toggle-box">UIT</button>
                    </div>

                    <div className="setting-row">
                        <div className="sr-info">
                            <div className="sr-name">Animaties</div>
                            <div className="sr-desc">De hover effecten aan en uit doen</div>
                        </div>
                        <button className="toggle-box on">AAN</button>
                    </div>

                    <div className="setting-row">
                        <div className="sr-info">
                            <div className="sr-name">Taal</div>
                            <div className="sr-desc">De taal</div>
                        </div>
                        <div className="sel-fake">Nederlands</div>
                    </div>
                </div>

                <div className="sg-panel">
                    <div className="sg-title">Meldingen</div>

                    <div className="setting-row">
                        <div className="sr-info">
                            <div className="sr-name">Push Meldingen</div>
                            <div className="sr-desc">Meldingen</div>
                        </div>
                        <button className="toggle-box on">AAN</button>
                    </div>

                    <div className="setting-row">
                        <div className="sr-info">
                            <div className="sr-name">Deadline Reminders</div>
                            <div className="sr-desc">Herinneringen</div>
                        </div>
                        <button className="toggle-box on">AAN</button>
                    </div>

                    <div className="setting-row">
                        <div className="sr-info">
                            <div className="sr-name">Geluidssignalen</div>
                            <div className="sr-desc">Audio</div>
                        </div>
                        <button className="toggle-box">UIT</button>
                    </div>

                    <div className="setting-row">
                        <div className="sr-info">
                            <div className="sr-name">E-mail Digest</div>
                            <div className="sr-desc">Mail</div>
                        </div>
                        <button className="toggle-box">UIT</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Settings;