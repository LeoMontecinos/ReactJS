export const NavbarComponent = ({cart}) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <a className="navbar-brand" href="#">BEED MUSIC</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Talleres</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profesores
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Bienvenido al carrito = {cart.length} </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <div className="input-group">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
     </div> 
    </form>
  </div>
</nav>

    )
}