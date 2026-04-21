import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from './pages/main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />} />
        {/* Later meer pagina's toevoegen: */}
        {/* <Route path="/agenda" element={<Agenda />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App