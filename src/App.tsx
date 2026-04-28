import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main, { HomeContent } from './pages/main'
import Rooster from './pages/rooster'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />}>
          <Route index element={<HomeContent />} />
          <Route path="rooster" element={<Rooster />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App