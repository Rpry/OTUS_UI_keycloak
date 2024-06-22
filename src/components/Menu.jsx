import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import userService from "../services/UserService";

const Menu = () => (
  <nav className="navbar navbar-expand bg-body-tertiary py-3 mb-5">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"> App!</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
        </ul>
        <div className="d-flex align-items-center">
          <div className="navbar-text mx-1" title="Authentication Context Class Reference">
            ACR: {UserService.isLoggedIn() ? UserService.getTokenParsed().acr: "" }
          </div>
          <div className="navbar-text mx-1">
            Signed in as <b>{UserService.getUsername()}</b>
          </div>
          { userService.isLoggedIn() &&
          <button className="btn btn-sm btn-success ms-1" onClick={() => UserService.doLogout()}>
            Logout
          </button>
          }
          { !userService.isLoggedIn() &&
            <button className="btn btn-sm btn-success ms-1" onClick={() => UserService.doLogin()}>
              Login
            </button>
          }

        </div>
      </div>
    </div>
  </nav>
)

export default Menu
