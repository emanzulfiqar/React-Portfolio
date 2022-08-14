// import './index.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
