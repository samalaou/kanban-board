import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import './App.css'

function App() {

  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
