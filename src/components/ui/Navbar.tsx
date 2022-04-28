import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startSignout } from "../../state/slices/user/userThunks";
import { AppDispatch, RootState } from "../../state/store";

export const Navbar = () => {

  const { user } = useSelector( (state: RootState) => state.user );
  const dispatch: AppDispatch = useDispatch();

  const handleSignOut = () => {
    dispatch( startSignout() );
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ms-2 me-2">
      <Link className="navbar-brand" to="/">
        AuthApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/student">
            Student
          </NavLink>

          <NavLink className="nav-item nav-link" to="/professor">
            Professor
          </NavLink>

          <NavLink className="nav-item nav-link" to="/admin">
            Admin
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">
            { user?.name }
          </span>
          <span className="nav-item nav-link text-info">
            { user?.role }
          </span>
          <button 
            className="btn btn-outline-info" 
            onClick={ handleSignOut }
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
