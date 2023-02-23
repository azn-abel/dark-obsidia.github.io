import './styles/index.css';
import Navbar from './Navbar.js'
import Home from './Home.js';
import Projects from './Projects.js'
import ContactMe from './ContactMe.js'
import Background from './images/wallpaper.jpg'


function App() {

  return (
    <div className="App">
      <h1 style={
        {
          backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(" + Background + ")",
          backgroundAttachment: "fixed"
        }
      }>Welcome to Abel Lu's Digital Portfolio</h1>
      <Navbar />
      <div className="content">
        <Home />
        <br />
        <Projects />
        <br />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
