import React from 'react'
import Header from './Components/Header/Header'
import Shop from './Components/Pages/Shop'
import Collections from './Components/Pages/Collections'
import Blog from './Components/Pages/Blog'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Detail from './Components/Pages/Detail'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Shop' element={<Shop />}/>
            <Route path='/Collections' element={<Collections />}/>
            <Route path='/Blog' element={<Blog />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/Detail/:id' element={<Detail />}/>
          </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  )
}

export default App
