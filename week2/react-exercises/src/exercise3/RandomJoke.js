import { useEffect, useState } from "react";
import Joke from "./Joke";



const RandomJoke = () => {

    const [joke, setJoke] = useState({});

    const getJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const joke = await response.json();
            setJoke(joke);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJoke(); 
    }, [])

    return (
       <Joke joke={joke} />
    )
}

export default RandomJoke;