import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Card from '../components/Card'

function App() {
  let score = 0;
  let clickedPokemon = [];

  // register click and record who was clicked
  function handleClick(e) {
    const pokemon = e.target.id;
    console.log(pokemon);
    clickedPokemon.push(pokemon);
  }

  return (
    <div>
      <Header score={score}/>
      <div class="gap"></div>
      <div class="main-grid">
        <Card className='card' pokemonName="ditto" onClick={handleClick}></Card>
        <Card className='card' pokemonName="groudon" onClick={handleClick}></Card>
        <Card className='card' pokemonName="suicune" onClick={handleClick}></Card>
        <Card className='card' pokemonName="bulbasaur" onClick={handleClick}></Card>
        <Card className='card' pokemonName="charmander" onClick={handleClick}></Card>
        <Card className='card' pokemonName="squirtle" onClick={handleClick}></Card>
        <Card className='card' pokemonName="pikachu" onClick={handleClick}></Card>
        <Card className='card' pokemonName="kyogre" onClick={handleClick}></Card>
        <Card className='card' pokemonName="breloom" onClick={handleClick}></Card>
        <Card className='card' pokemonName="blaziken" onClick={handleClick}></Card>
      </div>
    </div>
  )
}

export default App
