import {Form,  NavLink } from "react-router-dom";
import authToken from "../util/auth";


function Header() {

const token = authToken();

    return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
        <div className="container-fluid">
            <a className="navbar-brand nav__logo" href="#">careerHunt</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav__item--jobs">
                <NavLink to='/' className="nav-link active" aria-current="page">Jobs</NavLink>
            </li>
            <li className="nav-item nav__item--about">
                <NavLink to='/about' className="nav-link">About</NavLink>
            </li>
            {!token &&
                <li className="nav-item nav__item--signin">
                <NavLink to='/signin' className="nav-link">Signin</NavLink>
                </li>
            }
            
            {!token &&
                <li className="nav-item nav__item--register">
                <NavLink to='/register' className="nav-link">Register</NavLink>
                </li>
            }
           
            {token &&
            <li>
                 <Form action='/logout' method='post'>
                    <button className="nav-item nav__item--logout" >Logout</button>
                </Form>
            </li>
           
            }
            
      </ul>
    </div>
  </div>
</nav>        
    </>
}

export default Header;