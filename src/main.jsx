import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar'
import './index.css'
import Hero from './hero'
import Card from './card'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card 
      img ='./card.png'
      rating = '5.0'
      reviewCount = {6}
      country = 'USA'
      title = 'life lessons with Katie'
      price = {136}
    
    />
  </React.StrictMode>,
)
