import './App.css';
import {
  Navbar,
  Header, 
  Abouts, 
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
      <Abouts />
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
