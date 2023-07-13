import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <div>
      <div className='gradient'></div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path='/Project/:id' element={<ProjectDisplay />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
