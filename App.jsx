
import Home from './Home'
 
import './App.css'
import Sunflower from './Flower/Sunflower'
import {Routes,Route} from 'react-router-dom'

function App() {
   

  return (
    <>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/flower' element={<Sunflower />}/>

  </Routes>
 
  
    </>
  )
}
 
export default App
