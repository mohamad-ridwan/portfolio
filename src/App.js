import './App.css'
import Aplikasi from './components/aplikasi/Aplikasi';
import CareerFocus from './components/career-focus/CareerFocus';
import Kontak from './components/kontak/Kontak';
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbarmobile/NavbarMobile';
import Organisasi from './components/organisasi/Organisasi';
import Profile from './components/profile/Profile';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarMobile />
      <Profile />
      <Aplikasi />
      <Skills />
      <CareerFocus />
      <Organisasi />
      <Kontak />
    </div>
  );
}

export default App;
