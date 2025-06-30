import { React, useEffect, useState } from "react";

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getNewJoke = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let data = await response.json();
      console.log(data);
      setJoke(data);
    }
    getFirstJoke();
  }, []);

  const [joke, setJoke] = useState({
    type: "",
    setup: "",
    punchline: "",
  });

  return (
    <div>
      <h1>Joker</h1>
      <button onClick={getNewJoke}>Get a joke</button>
      <div>
        <h4>Type : {joke.type}</h4>
        <h3>Setup : {joke.setup} </h3>
        <p>{joke.punchline}😂</p>
      </div>
    </div>
  );
}
