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
        <Card pokemonName="groudon"></Card>
        <Card pokemonName="suicune"></Card>
        <Card pokemonName="bulbasaur"></Card>
        <Card pokemonName="charmander"></Card>
        <Card pokemonName="squirtle"></Card>
        <Card pokemonName="pikachu"></Card>
        <Card pokemonName="kyogre"></Card>
        <Card pokemonName="rayquaza"></Card>
        <Card pokemonName="blaziken"></Card>
      </div>
    </div>
  )
}

export default App
