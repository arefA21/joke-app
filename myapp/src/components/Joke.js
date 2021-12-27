import React, { useState,useEffect } from "react";
import axios from "axios";

export default function Joke() {

  const [joke, setJoke] = useState('');
  
  useEffect(() => {
    axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))
  }, []);

  const fetchData = () => {
    axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))
  }
  

  return (
    <div className="w-75 p-3 mx-auto">
      <div class="card text-center">
        <div class="card-header">Dad Joke</div>
        <div class="card-body">
          <p class="card-text">
            {joke.joke}
          </p>
          <a href="#" class="btn btn-primary" onClick={fetchData}>
            next joke
          </a>
        </div>
      </div>
    </div>
  );
}
