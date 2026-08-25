import './App.css'
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import Service from './routes/Service'
import About from './routes/About'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>            
    </>
  )
}

export default App
