import './App.css';
import {
  Navbar,
  Header, 
  About, 
  Project,
  Social, 
  Stack, 
  Footer
} from './components/index'
import ScrollToTopButton from './components/ui/button/ScrollToTopButton';
function App() {
  return (
    <main className='main'>
      <header className='header-bg' >
      <Navbar />
      <Header />
      </header>
      <About />
      <Social />
      <Stack />
      <Project />
      {/* <Contact /> */}
      <Footer />
      < ScrollToTopButton  />
    </main>
  );
}

export default App;
