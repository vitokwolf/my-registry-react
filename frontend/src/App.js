import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
