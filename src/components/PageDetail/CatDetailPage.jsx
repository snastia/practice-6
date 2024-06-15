import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CatDetailPage(){
    const {catId} = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.state.from)

    return(
        <>
        <h1>Cat: {catId}</h1>
        <Link to={`${location.state?.from ?? '/cats'}`}>Go home</Link>
        <button type="button" onClick={() => navigate('/', {replace: true})}>На головну</button>
        <ul>
            <li><Link to='description'>Description</Link></li>
            <li><Link to='breeds_history'>Breeds history</Link></li>
        </ul>
        <Outlet/>
      </>
    )
}

export default CatDetailPage;