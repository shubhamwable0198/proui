
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage/>}></Route>
      </Routes>


      </BrowserRouter>
    
    </div>
  );
}

export default App;
