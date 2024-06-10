import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Project } from './types/index'
import { v4 as uuidv4 } from "uuid";
uuidv4();


function App() {

  return (
    <>
      <Sidebar/>
    </>
  )
}

export default App
