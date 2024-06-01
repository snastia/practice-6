import { Component } from "react"

export class DropdownMenu extends Component{
    state = {
      isOpen: false,
    }
    toggle = () => this.setState((prevState) => ({isOpen: !prevState.isOpen}))
    render(){
        return(
     <div className="Dropdown">
       <button onClick={this.toggle}
         type="button"
         className="Dropdown__toggle">{this.state.isOpen ? "Сховати" : "Показати"}</button>

      {this.state.isOpen && <div className="Dropdown__menu">Випадаюче меню</div>}
     </div>
        )
    }
}