import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Skills from './components/Skills';
import Projects from './components/Projects'
import './main.css';

function App() {
  return (
    <div className="page">
      <Header />
      <div className='mainbody'> 
        <Showcase />      
      </div>
      <div className='skillSection'>
        <h2>Skills</h2>
        <Skills />
      </div>
      <div className='projectSection'>  
        <h2>Projects</h2>      
        <Projects />        
      </div>
      <Footer />
    </div>
  );
}

export default App;