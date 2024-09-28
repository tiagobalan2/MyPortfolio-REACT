import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Projects2 } from './components/Projects2';



import 'bootstrap/dist/css/bootstrap.min.css';
import { Certifications } from './components/Certifications';

function App() {
  return (
    <div className="App">
           <NavBar />
           <Banner />
          <Skills/>
          <Projects2/>
          <Certifications/>
          <Footer/>
    </div>
  );
}

export default App;
