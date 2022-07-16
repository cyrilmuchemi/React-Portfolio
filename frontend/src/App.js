import './App.css';
import { About, Footer, Header, Skills, Testimonial, Work } from './container/export'
import  Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
