import React from 'react'
import home from '../components/home'
import login from '../components/login'
import { ERANGE } from 'constants';
import {Link} from 'react-router-dom'

class Header extends React.Component{

  onSignOut() {
    localStorage.clear();
     // this.props.history.push('/')
  }

    render() {
        return(
          <nav className="main-header navbar navbar-expand navbar ">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#" >{/*component={home}*/}
                <i class="fas fa-bars"></i>
              </a>
            </li>
            <ul className="navbar-nav ml-auto">
            <div className="mr-2">
              <span>
                <a class = 'nav-link' href="#"  >HOME</a> {/*component={login}*/}
              </span>
            </div>
          </ul>
        
            {/* <li class="nav-item d-none d-sm-inline-block">
              <a href="/home" class="nav-link">
                Home
              </a>
            </li> */}
          </ul>
          <ul className="navbar-nav ml-auto">
            <div className="mr-2">
            <span>
            <Link to= "" onClick = {this.onSignOut} > Sign Out</Link>
              </span>
              
            </div>
          </ul>
        </nav>
        )
    }
}

export default Header