import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main, { HomeContent } from './pages/main'
import Rooster from './pages/rooster'
import Profiel from './pages/profiel'
import Taken from './pages/taken'
import Settings from './pages/settings'
import Leraren from './pages/leraren'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />}>
          <Route index element={<HomeContent />} />
          <Route path="rooster" element={<Rooster />} />
          <Route path="profiel" element={<Profiel />} />
          <Route path="taken" element={<Taken />} />
          <Route path="settings" element={<Settings />} />
          <Route path="leraren" element={<Leraren />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App