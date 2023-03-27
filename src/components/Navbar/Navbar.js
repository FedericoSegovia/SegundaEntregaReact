import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="nav-container">
     <nav className="navbar">
     <h1 className="navbar-logo">Home</h1>
     <Link className="seeCarrito" to={"/cart"}> Carrito</Link>
     </nav>
    </div>
    
  )
}

export default Navbar;