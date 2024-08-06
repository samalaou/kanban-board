import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {

  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <div className='main-content'>
          <Sidebar/>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
