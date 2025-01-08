import { useEffect } from 'react';
import { useState } from 'react';

export default function Card({pokemonName, className, onClick}) {
    const [pokedata, setPokedata] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        let abortController = new AbortController();
        setIsLoading(true);

        const fetchData = async function() {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!ignore) {
                setPokedata(data);
            }
            setIsLoading(false);
        }

        fetchData();

        // clean-up
        return () => {
            ignore = true;
            abortController.abort()
        };
        // dep array
    }, [pokemonName]);

    const imageSource = pokedata?.sprites?.front_default;

    return (
        <div> 
            {isLoading ? (
            <p>Loading...</p>
                ) : (
            <img 
            class={className} 
            src = {imageSource} 
            alt={`Image of ${pokemonName}`}
            onClick={onClick}
            id = {pokemonName}/>)}
        </div>
    );
}