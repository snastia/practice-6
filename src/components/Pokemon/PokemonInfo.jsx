import { PureComponent, useEffect, useState } from "react";

// 'idle'
// * 'pending'
// * 'resolved'
// * 'rejected'

export function PokemonInfo({pokemonName}){

const [pokemon, setPokemon] = useState("")
const [error] = useState("", null)
const [isLoading] = useState("", false)
const [status] = useState("", "idle")

useEffect(() => {
    setPokemon({status: "pending", pokemon: null})

    fetch(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => {
        if(!res.ok){
             return Promise.reject(new Error(`Покемона з іменем ${pokemonName}
         не знайдено.`))
        }
      return res.json()
       })
    .then(pokemon => {
        setPokemon({pokemon, status: "resolved"})
    }).catch(error => error({error, status: "rejected"}))
}, [pokemon, pokemonName])

    if(status === "idle"){
        return <p>Введіть ім'я покемона.</p>
    }
    if(status === "pending"){
        return <div>Loading...</div>
    }
    if(status === "resolved"){
        return <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
       </div>
    }
    if(status === "rejected"){
        return <div>{error.message}</div>
    }}