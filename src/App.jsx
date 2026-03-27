import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Rian from './pages/Rian'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rian" element={<Rian />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App