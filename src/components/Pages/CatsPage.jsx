import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function CatsPage(){
  const [cats, setCats] = useState(['cat-1', 'cat-2', 'cat-3', 'cat-4'])
  const [searchParams, setSearchParams] = useSearchParams('');

  const catId = searchParams.get('name') || ''

  const updateQueryString = (e) => {
    if(e.target.value !== ''){
      return setSearchParams({name: e.target.value})
    }
    setSearchParams({})
  }

  const visibleCats = () => {
    return cats.filter(cat => cat.includes(catId))
  }

    return(
        <>
          <h1>Cats page</h1>
          <input type="text" value={catId} onChange={updateQueryString}/>
          <ul>
            {visibleCats().map(cat => {
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