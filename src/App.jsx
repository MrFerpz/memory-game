import { useState } from 'react'
import './App.css'
import Header from '../components/Header'

function App() {
  let score = 3;

  return (
    <div>
      <Header score={score}/>
      <div></div>
    </div>
  )
}

export default App
