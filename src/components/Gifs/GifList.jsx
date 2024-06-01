import { PureComponent } from "react";

export class GifsList extends PureComponent {
    state = {
      gif: "",
      error: null,
      status: "resolve"
    }

    render(){
        const {gif, status, error} = this.state
        const {gifs} = this.props
   return <ul>
        {gifs && gifs.map((gif) => {
          return <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.id} />
           </li>
        })}
    </ul>
    }

}