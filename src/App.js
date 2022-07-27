import './App.css';
import { Footer } from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import { Join } from './components/Join/Join';
import { Plans } from './components/Plans/Plans';
import { Programs } from './components/Programs/Programs';
import { Reasons } from './components/Reasons/Reasons';
import { Testimonials } from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </div>

    </div>
  );
}

export default App;
