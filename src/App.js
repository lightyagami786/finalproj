import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Driver from './components/Driver';
import User from './components/User';

function App() {
  return (
  <div>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/whereto' element={<Driver/>}/>
  <Route path='/towhere' element={<User/>}/>


  </Routes>
  
  
  </BrowserRouter>
  </div>
  );
}

export default App;
