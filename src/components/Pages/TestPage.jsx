import { Link } from "react-router-dom";

function TestPage(){
    return(
        <>
          <h1>Tests page</h1>
          <ul>
            {['test-1', 'test-2'].map(test => {
            return (
               <li>
                <Link to={`${test}`}>{test}</Link>
                </li>
            )
          })}
        </ul>
        </>
    )
}

export default TestPage;