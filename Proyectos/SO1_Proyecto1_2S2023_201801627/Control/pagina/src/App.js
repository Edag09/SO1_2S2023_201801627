import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Encabezado'
import Historial from './Pages/Historial';
import Time from './Pages/Time';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/historial' element={<Historial/>} />
        <Route path='/time' element={<Time/>} />
      </Routes>
    </div>
  );
}

export default App;