import {Route,Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* import HomePage from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Collection from './pages/Collection'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login' 
import Header from './components/Header/Header'  */
import index from '.'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        {/* <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/placeholder' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} /> */}

        <Route path='/' element={<index.HomePage/>} />
        <Route path='/about' element={<index.About/>} />
        <Route path='/collection' element={<index.Collection/>} />
        <Route path='/product/:productId' element={<index.Product/>} />
        <Route path='/contact' element={<index.Contact/>} />
        <Route path='/place-order' element={<index.PlaceOrder/>} />
        <Route path='/orders' element={<index.Orders/>} />
        <Route path='/cart' element={<index.Cart/>} />
        <Route path='/login' element={<index.Login/>} />
        <Route path='/signup' element={<index.Signup/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
