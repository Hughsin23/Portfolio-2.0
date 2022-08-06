import { useState } from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact'
import ToTop from './components/toTop/ToTop';
import Menu from './components/menu/Menu';
import Skills from './components/skills/Skills'

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="App">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <ToTop />
    </div>
  );
}

export default App;
