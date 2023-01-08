import './App.css';
import Home from './components/home/Home';
import Programs from './components/programs/Programs';
import Reasons from './components/why/Reasons';
import Plans from './components/plans/Plans';
import Testimonials from './components/testimonials/Testimonials';
import Email from './components/Email/Email';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
          <Home/>
          <Programs />
          <Reasons />
          <Plans/>
          <Testimonials/>
          <Email/>
          <Footer/>
    </div>
  );
}

export default App;
