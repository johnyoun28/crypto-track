import {Routes, Route} from 'react-router-dom'
import CoinInfo from './Components/CoinInfo'
import Navbar from './Components/Navbar' 
import Home from './Pages/Home'

function App() {


  return (
    <div>
      <Navbar/>
        <Routes>
        <Route path='/coins/:id' element={<CoinInfo/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default App
