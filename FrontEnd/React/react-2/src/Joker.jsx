import { useEffect, useState } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const getNewJoke = async () =>  {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }
    // useEffect() is used for first time rendering
    // useEffect(setup, dependencies)
    useEffect(()=> {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
        }
        getFirstJoke();
    }, [])
    return (
        <div>
            <h1>Joker</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    )
}