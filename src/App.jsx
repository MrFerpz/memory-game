import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Card from '../components/Card'

function App() {
  const [score, setScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [cardOrder, setCardOrder] = useState(['ditto', 'groudon', 'suicune', 'bulbasaur', 
  'charmander', 'squirtle', 'pikachu', 'kyogre', 
  'breloom', 'blaziken']);

  // register click and record who was clicked
  function handleClick(e) {
    if (score === 10) {
      alert("Good job, you win!");
      score = 0;
      shuffle();
    }

    const pokemon = e.target.id;
    console.log(pokemon);

    // check for loss & reset
    if (pokemonList.includes(pokemon)) {
      alert("You lose! Try again.");
      setScore(0);
      setPokemonList([]);
      shuffle();
    } else {
    // otherwise add to the score and track clicked mons
    let newScore = score + 1;
    let newPokemonList = pokemonList.concat(pokemon);
    console.log(newPokemonList);

    setScore(newScore);
    setPokemonList(newPokemonList);

    // now re-arrange
    shuffle();
    }
  }

  function shuffle() {
    let shuffledOrder = cardOrder;
    // randomise order
    let currentIndex = shuffledOrder.length;
    while (currentIndex > 0) {
      // randomIndex is a random number between 0 and 9 (as we use floor)
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledOrder[currentIndex], shuffledOrder[randomIndex]] 
      = [shuffledOrder[randomIndex], shuffledOrder[currentIndex]]
    }

     // assign positions
    setCardOrder(shuffledOrder);
    console.log(shuffledOrder);
  }

  return (
    <div>
      <Header score={score}/>
      <div class="gap"></div>
      <div class="main-grid">
        {cardOrder.map(card => (
          <Card className='card' pokemonName={card} onClick={handleClick}></Card>
        ))}
      </div>
    </div>
  )
}

export default App
