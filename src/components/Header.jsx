import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Header extends Component {
    state = {
      navCollapsed: true
    }
  
    _onToggleNav = () => {
      this.setState({ navCollapsed: !this.state.navCollapsed })
    }
  
    render () {
      const {navCollapsed} = this.state
  
        return (
            <>
                <header className="header-nav">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                <img src="/logo.png" alt="logo" width="100" height="34" />
                            </a>
                            <button aria-expanded="false" className="navbar-toggler collapsed" onClick={this._onToggleNav} type="button">
                                <img src="/navbar_toggle.png" alt="toggle" width="34" height="34"/>
                            </button>
                            <div className={(navCollapsed ? "collapse " : "") + "navbar-collapse justify-content-end"} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link font-nav" href="#ourServices" >Our Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-nav" href="#whyUs" >Why Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-nav" href="#testimonial" >Testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-nav me-2" href="#faq" >FAQ</a>                
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <button className="btn my-2 my-sm-0 font-nav text-light color-btn-green" type="submit" >Register</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header> 
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="js/bootstrap.min.js"></script>
            </>
        );
    };
};
        
export default Header;