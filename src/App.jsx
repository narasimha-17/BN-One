import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import BackgroundCurves from './components/BackgroundCurves.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import Industry from './pages/Industry.jsx'
import Services from './pages/Services.jsx'
import Leadership from './pages/Leadership.jsx'
import CustomerStories from './pages/CustomerStories.jsx'

function App() {
  return (
    <>
      <BackgroundCurves />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/services" element={<Services />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/about" element={<Navigate to="/leadership" replace />} />
        <Route path="/customers" element={<CustomerStories />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App
