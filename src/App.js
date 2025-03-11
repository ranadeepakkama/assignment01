import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home'
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ContactUs from './components/ContactUs';

const App = () => {
  return(
    <div>
        <Routes>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default App