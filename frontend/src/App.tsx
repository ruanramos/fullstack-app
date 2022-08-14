import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Doctors from './pages/Doctors';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
