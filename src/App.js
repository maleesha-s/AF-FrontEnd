import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserDetailsComponent from './components/UserListComponents';
import AdminDashboard from './components/AdminDashboardComponent'
import React, { Component } from 'react';
import logo from './image/icms 2.png';
function App() {
  return (
    
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="" width="100" height="100" class="d-inline-block align-top"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link text-light" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item text-light" href="#">Action</a></li>
                                    <li><a class="dropdown-item text-light" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
                                </ul>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success text-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
      <Router>
        <switch>
          <Route path = "/" exact component = {AdminDashboard}></Route>
        </switch>
      </Router>
    </div>

  );
}
export default App;
