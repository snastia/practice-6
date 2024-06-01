import { Link } from "react-router-dom";

function CatsPage(){
    return(
        <>
          <h1>Cats page</h1>
          <ul>
            {['cat-1', 'cat-2', 'cat-3', 'cat-4'].map(cat => {
            return (
               <li>
                <Link to={`${cat}`}>{cat}</Link>
                </li>
            )
          })}
        </ul>
        </>
    )
}

export default CatsPage;