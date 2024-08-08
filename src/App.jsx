import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";  
import ErrorPage from "./pages/ErrorPage";  
import './App.css'

function App() {

  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <div className='main-content'>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={ <ErrorPage /> } /> 
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
