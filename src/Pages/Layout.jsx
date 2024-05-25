import { NavLink, Outlet } from "react-router-dom";

function Layout(){
  return (
    <>
    <nav>
        <ul>
          <li>
          <NavLink to='/'>home page</NavLink>
          </li>
          <li>
            <NavLink to='/cats'>Cats page</NavLink>
          </li>
          <li>
            <NavLink to='/dogs'>Dogs page</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Layout;