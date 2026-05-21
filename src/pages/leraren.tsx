import '../styling/leraren.css'

const docenten = [
    {
        id: 1,
        naam: 'Jan',
        rol: 'Begeleider & Coach',
        vak: 'Flex',
        num: 'Docent 01',
        Class: 'lp-bg-0',
        initial: 'J',
        shapes: (<>
            <div className="lw-geo geo1" />
            <div className="lw-geo geo2" />
        </>
        ),
    },
    {
        id: 2,
        naam: 'Jeroen',
        rol: 'Begeleider & Coach',
        vak: 'Flex',
        num: 'Docent 02',
        Class: 'lp-bg-1',
        initial: 'J',
        shapes: (<>
            <div className="lw-geo geo3" />
            <div className="lw-geo geo4" />
            <div className="lw-geo geo5" />
        </>
        ),
    },
    {
        id: 3,
        naam: 'Peter',
        rol: 'Begeleider & Coach',
        vak: 'Flex',
        num: 'Docent 03',
        Class: 'lp-bg-2',
        initial: 'P',
        shapes: (<>
            <div className="lw-geo geo6" />
            <div className="lw-geo geo12" />
        </>
        ),
    },
    {
        id: 4,
        naam: 'Alex',
        rol: 'Docent',
        vak: 'Rekenen',
        num: 'Docent 04',
        Class: 'lp-bg-3',
        initial: 'A',
        shapes: (<>
            <div className="lw-geo geo7" />
            <div className="lw-geo geo8" />
        </>
        ),
    },
    {
        id: 5,
        naam: 'Annika',
        rol: 'Docent',
        vak: 'Nederlands',
        num: 'Docent 05',
        Class: 'lp-bg-4',
        initial: 'A',
        shapes: (<>
            <div className="lw-geo geo9" />
            <div className="lw-geo geo10" />
            <div className="lw-geo geo11" />
        </>
        ),
    },
]

export function LerarenContent() {
    return (
        <div className="page-content">
            <div className="topbar">
                <div className="tb-left">
                    <span className="tb-chapter">04 —</span>
                    <span className="tb-title">LERAREN</span>
                </div>
                <div className="tb-right">
                    <span className="tb-tag">XSB1B</span>
                    <span className="tb-tag">5 Docenten</span>
                </div>
            </div>

            <div className="leraren-wall">
                {docenten.map((docent) => (
                    <div key={docent.id} className="lw-card">
                        <div className={`lw-class ${docent.Class}`}>
                            {docent.shapes}
                            <div className="lw-initial">{docent.initial}</div>
                        </div>
                        <div className="lw-body">
                            <div className="lw-num">{docent.num}</div>
                            <div className="lw-name">{docent.naam}</div>
                            <div className="lw-role">{docent.rol}</div>
                            <div className="lw-ruler" />
                            <div className="lw-vak-label">Vakken</div>
                            <div className="lw-vak">{docent.vak}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LerarenContent