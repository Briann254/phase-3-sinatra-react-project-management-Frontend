import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      @MyApp 
    </Link>	
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#toolbar"
      aria-controls="toolbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>	
    <div className="collapse navbar-collapse" id="toolbar">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/employees">
            Employees
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks">
            Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            <i className="fas fa-user"></i> Profile
          </Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> New Project
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Toolbar;
