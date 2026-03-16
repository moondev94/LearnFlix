import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from './components/Header';
import Home from './pages/home';
import Signup from './pages/signup';
import About from './pages/about'
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";




function App() {


  return (
    <>
    <Provider store={store}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path="/dashboard/aluno" element={<StudentDashboard />} />
  <Route path="/perfil" element={<StudentProfile />} />
        </Routes>
      </main>
      </Provider>
    </>
  )
}

export default App
