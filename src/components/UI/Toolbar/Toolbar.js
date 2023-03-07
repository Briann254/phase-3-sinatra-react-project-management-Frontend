import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 {/* navbar */}
    <Link className="navbar-brand" to="/LandingPage">
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
          <Link className="nav-link" to="/friends">
            Team
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
        <Link className="btn btn-primary" to="/projects/add">New Project</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Toolbar;
