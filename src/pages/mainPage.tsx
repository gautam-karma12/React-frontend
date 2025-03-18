import { Link } from "react-router-dom";

const MainPage = () =>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
    Navbar
  </Link>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  </div>
</nav>
</>
    )
}
export default MainPage;