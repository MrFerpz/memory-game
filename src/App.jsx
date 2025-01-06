import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Card from '../components/Card'

function App() {
  let score = 0;

  return (
    <div>
      <Header score={score}/>
      <div class="main-grid">
        <Card pokemonName="ditto"></Card>
      </div>
    </div>
  )
}

export default App
