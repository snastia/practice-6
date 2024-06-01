import { PureComponent } from "react"

export class PokemonForm extends PureComponent{

  handleSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget
    this.props.onSubmit(form.elements.input.value)
    form.reset()
  }

  render(){
     return(
     <form onSubmit={this.handleSubmit}>
        <input type="text" name="input"/>
        <button type="submit">Search</button>
     </form>
   )
  }
}