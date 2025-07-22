import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <MyNavbar />
      <Welcome />
      <AllTheBooks />
      <Footer />
    </>
  );
}

export default App;
