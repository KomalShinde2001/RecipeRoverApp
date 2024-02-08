import { BrowserRouter , Route , Routes } from "react-router-dom"
import {useState } from 'react';
import Home from './Home'
import About from './About'
import Nav from './Navbar'
import Search from './Search'
import AboutMeal from './AboutMeal'
import Aboutus from "./Aboutus"
import Footer from './Footer'
import ErrorPage from './ErrorPage'
const Router = () => {
  const[search , setSearch]=useState("b")
  const[meal , setMeal] = useState("")
  return (
      <div>
          <BrowserRouter> 
          <Nav  setSearch={setMeal}/>          
          <Routes>      
            <Route  path="/" element={<Home search={search}/>}/>
            <Route  path="/aboutus" element={<Aboutus   /> }/>
            <Route  path="/about" element={<About search={search}/>}/>
            <Route path="/search" element={<Search search={meal} />}/>
            <Route  path="/aboutmeal" element={<AboutMeal search={search}/>}/>
            <Route path="/aboutMeal" element={<ErrorPage/>} />
            <Route path="/category"element={<ErrorPage/>} />
          </Routes>
          <Footer/>
          
          </BrowserRouter>

      </div>

  )
}

export default Router