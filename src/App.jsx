import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Destination from './components/Destination'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Flight from './components/Router/Flight'
import { BrowserRouter, RouterProvider , Routes ,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/flight" element={<Flight />} />
        {/* <Route path="/Herosection" element={<Herosection />} /> */}
      {/* </Routes>
      </BrowserRouter> */} 
      <Navbar/>
      <Herosection/>
      <div className='places'>
        <Destination img="https://img.freepik.com/free-photo/wide-shot-kualoa-ranch-hawaii-usa_181624-11701.jpg?t=st=1711051183~exp=1711054783~hmac=c420293c192950984dc79faa65e0b1509cc3ca8032b79f1c0d74e624b4d20a61&w=996" title="Cape Towe" description=" A city of stunning natural beauty and cultural diversity" />
        <Destination img="https://img.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-sunset-japan_335224-215.jpg?t=st=1711051274~exp=1711054874~hmac=a4c16f11aba44b71c9f1a51edd295c5a4b8ba77ad96a2165643f1fc90fcfd744&w=996" title="Kyoto" description="Kyoto, a city of timeless charm and cultural richness"/>
        <Destination img="https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050908.jpg?t=st=1711051488~exp=1711055088~hmac=855aa1cabce80814860b650e36e77011023ca5f4e62e4a4850670f4296e60f2a&w=996" title="Santorini " description=" Stunning sunsets, white-washed cliffs, and azure seas define this picturesque Aegean paradise."/>
        <Destination img="https://img.freepik.com/free-photo/pura-taman-ayun-temple-bali-indonesia_335224-392.jpg?t=st=1711051710~exp=1711055310~hmac=8e2b30980f9b704e0f4c909ec442b9fa77c1b95c633e7baa895f89ef55cdf97d&w=996" title="Bali" description="A tropical haven boasting lush landscapes, pristine beaches, vibrant culture, and spiritual tranquility."/>
        <Destination img="https://img.freepik.com/free-photo/eiffel-tower-with-bridge-river-seine-paris-france_649448-4968.jpg?t=st=1711051819~exp=1711055419~hmac=5bd0535c6af3a0dd15bd0e13cbcd26a7072a012628b069bf42f838868ae2d919&w=360" title="Paris" description="Romantic, iconic, cultural."/>
        <Destination img="https://img.freepik.com/free-photo/beautiful-vertical-shot-taj-mahal-building-agra-india-cloudy-sky_181624-16913.jpg?t=st=1711051964~exp=1711055564~hmac=42f2b0d44176f16130ebd36cc1ad77a93cafdbf9c416ba259e262aa80594655b&w=360" title="Taj Mahal" description="Captivating Majesty of Taj Mahal"/>
        <Destination img="https://img.freepik.com/free-photo/top-view-dubai_158595-2014.jpg?t=st=1711052136~exp=1711055736~hmac=94cb3c3ad00a76efb85a67ab757eefb3ee129c256b42ca7c3d6642119b31f792&w=996" title="Dubai" description="Modern marvel in the desert."/>
        <Destination img="https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?t=st=1711052270~exp=1711055870~hmac=c0cf99312e0e92db65c3d7bc7de65b62d39e8139ff0298a6e5451d26ffd395a1&w=996" title="London" description="Iconic city blending history, culture, and diversity."/>

      </div>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App