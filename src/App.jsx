import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <div className='d-flex flex-column vh-100'>
        <header>
          <MyNavbar />
        </header>
        <main className='flex-grow-1'>
          <Welcome />
          <AllTheBooks />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
