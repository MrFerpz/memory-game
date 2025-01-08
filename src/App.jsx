import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Card from '../components/Card'

function App() {
  let score = 0;
  let clickedPokemon = [];

  function handleClick() {
    if (clickedPokemon.includes(pokemonName)) {
      alert("You lose!")
    } else {
    clickedPokemon.push(pokemonName);
    score++;
    }
  }

  return (
    <div>
      <Header score={score}/>
      <div class="gap"></div>
      <div class="main-grid">
        <Card className='card' pokemonName="ditto" onClick={handleClick}></Card>
        <Card className='card' pokemonName="groudon"></Card>
        <Card className='card' pokemonName="suicune"></Card>
        <Card className='card' pokemonName="bulbasaur"></Card>
        <Card className='card' pokemonName="charmander"></Card>
        <Card className='card' pokemonName="squirtle"></Card>
        <Card className='card' pokemonName="pikachu"></Card>
        <Card className='card' pokemonName="kyogre"></Card>
        <Card className='card' pokemonName="breloom"></Card>
        <Card className='card' pokemonName="blaziken"></Card>
      </div>
    </div>
  )
}

export default App
