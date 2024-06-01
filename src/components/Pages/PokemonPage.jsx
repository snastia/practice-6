import { PokemonForm } from "components/Pokemon/PokemonForm"
import { PokemonInfo } from "components/Pokemon/PokemonInfo"

export function PokemonPage(){
     return(
          <>
          <PokemonForm />
          <PokemonInfo/>
          </>
     )
}

export default PokemonPage;