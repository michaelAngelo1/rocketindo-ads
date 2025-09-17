import { Route, Routes } from 'react-router'
import './App.css'
import RoseJellyMask from './pages/RoseJellyMask'
import Home from './pages/Home'
import Pomegranate from './pages/Pomegranate'
import Orange from './pages/Orange'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rose-jelly-mask" element={<RoseJellyMask />} />
        <Route path="/polynia-pomegranate" element={<Pomegranate />} />
        <Route path="/polynia-orange" element={<Orange />} />
      </Routes>
    </>
  )
}

export default App
