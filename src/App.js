import './App.css';
import {
  Navbar,
  Header, 
  Abouts, 
  Project,
  Social, 
  Stack, 
  Footer,
  Learnings
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
    <Learnings />
      <Social />
      <Stack />
      <Project />
      <Footer />
      < ScrollToTopButton  />
    </main>
  );
}

export default App;
