import {Routes, Route} from 'react-router-dom'
import CoinPage from './Pages/CoinPage'
import Navbar from './Components/Navbar' 
import Home from './Pages/Home'

function App() {


  return (
    <div>
      <Navbar/>
        <Routes>
        <Route path='/coins/:id' element={<CoinPage/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default App
