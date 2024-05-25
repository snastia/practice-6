import { Link } from "react-router-dom";

function DogsPage(){
    return(
        <>
          <h1>Dogs page</h1>
          <ul>
            {['dog-1', 'dog-2', 'dog-3'].map(dog => {
            return (
               <li>
                <Link to={`${dog}`}>{dog}</Link>
                </li>
            )
          })}
        </ul>
        </>
    )
}

export default DogsPage;