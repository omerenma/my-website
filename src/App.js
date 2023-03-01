import './App.css';
import {
  Navbar,
  Header, 
  Features, 
  Project,
  Social, 
  Stack, 
  Contact,
  Footer
} from './components/index'
function App() {
  return (
    <main>
      <header className='header-bg' >
      <Navbar />
      <Header />
      </header>
      <Features />
      <Social />
      <Stack />
      <Project />
      {/* <Contact /> */}
      <Footer />
      
    </main>
  );
}

export default App;
