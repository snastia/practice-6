import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DogDetailPage(){
    const {dogId} = useParams()

    return(
      <>
        <h1>Dog: {dogId}</h1>
        <ul>
           <li><Link to='breeds_for_what'>For what exist this breed</Link></li>
           <li><Link to='height_dog'>Height of a dog</Link></li>
        </ul>
        <Outlet/>
      </>
        
    )
}

export default DogDetailPage;