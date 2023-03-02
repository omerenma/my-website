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
import ScrollToTopButton from './components/ui/button/ScrollToTopButton';
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
      < ScrollToTopButton />
    </main>
  );
}

export default App;
