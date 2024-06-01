import { Link } from "react-router-dom";

function PokemonFP(){
     return(
           <>
          <h1>Pokemons page</h1>
          <ul>
            {['pokemon-1', 'pokemon-2'].map(pokemon => {
              return(  
          <li>
               <Link to={`${pokemon}`}>{pokemon}</Link>
          </li>
              )
          })}
          </ul>
          </>
     )
}

export default PokemonFP;