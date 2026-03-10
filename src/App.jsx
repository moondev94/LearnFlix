import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/home';
import Signup from './pages/signup';
import About from './pages/about'




function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
