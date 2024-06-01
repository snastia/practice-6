import { Component } from "react"

export class Form extends Component{

    state = {
       member: "",
       license: false
    }

    handleMemberChange = (e) => {
      this.setState({
        member: e.currentTarget.name
      })
    }

    handleLicenseChange = () => {
        this.setState((prevState) => {
            return {license: !prevState.license}
        })
    }

    render(){
         return(
        <form>
            <label>
                <input type="radio" name="student" 
                checked={this.state.member === "student"} 
                onChange={this.handleMemberChange}/>
                Student
            </label>

            <label>
                <input type="radio" name="professor" 
                checked={this.state.member === "professor"} 
                onChange={this.handleMemberChange}/>
                Professor
            </label>

<br />

            <label>
                <input type="checkbox" checked={this.state.license} onChange={this.handleLicenseChange}/>
                Погоджуюсь на участь в конференціях
            </label>
        </form>
    )
    }
   
}