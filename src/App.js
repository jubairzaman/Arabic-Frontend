
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>



    </div>
  );
}

export default App;
