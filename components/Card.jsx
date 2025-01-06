import { useEffect } from 'react';
import { useState } from 'react';

export default function Card({pokemonName}) {
    const [pokedata, setPokedata] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        let abortController = new AbortController();

        const fetchData = async () => {
        setIsLoading(true);
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!ignore) { 
                setPokedata(data) 
            }
        } catch (error) {
            console.error('Error fetching data', error)
        } finally {
            setIsLoading(false);
        }};

        // side-effect
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
            <img src = {imageSource} alt={`Image of ${pokemonName}`}/>)}
        </div>
    );
}