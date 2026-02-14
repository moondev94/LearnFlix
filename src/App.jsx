import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlay, faBookmark  } from "@fortawesome/free-solid-svg-icons";



function App() {


  return (
    <>
      <Header/>
      <main className='main'>
      <Card
      content="Aula 1"
      button1= {<FontAwesomeIcon icon={faPlay}/>}
      button2= ""
      button3= {<FontAwesomeIcon icon={faBookmark}/>}
      />
      <Card
      content=" Aula 2"
      button1= {<FontAwesomeIcon icon={faPlay}/>}
      button2= ""
      button3= {<FontAwesomeIcon icon={faBookmark}/>}
      />
      <Card
      content="Aula 3"
      button1= {<FontAwesomeIcon icon={faPlay}/>}
      button2= ""
      button3= {<FontAwesomeIcon icon={faBookmark}/>}
      />
      </main>
    </>
  )
}

export default App
