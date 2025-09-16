import { Route, Routes } from 'react-router'
import './App.css'
import RoseJellyMask from './pages/RoseJellyMask'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rose-jelly-mask" element={<RoseJellyMask />} />
      </Routes>
    </>
  )
}

export default App
