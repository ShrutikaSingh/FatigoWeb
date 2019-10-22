import React,{Component} from 'react';
import logo from '../../src/logo.svg';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavLink,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';


function Users() {
    return <h2>Users</h2>;
  }

class AppNavbar extends Component{       
        constructor(props){
                 super(props);
                 this.toggle=this.toggle.bind(this);
                 this.state={
                    isOpen: false
                };
            }
            toggle(){
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }
    render(){
        return(
        <Router>
            <Navbar  color="light" light expand="md">
                <NavLink to='/details'>
                        <img src={logo} alt="services" className="navbar-brand" height="50px"></img>
                </NavLink> 
                <NavbarBrand href="/">FATIGO</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <ul className='navbar-nav align-items-center'>
                                <li className="nav-item ml-2"> 
                                    <Link to='/home' className="nav-link"> Home</Link>
                                 </li>
                                <li className="nav-item ml-2">
                                    <Link to='/about/' className="nav-link"> About Us</Link>
                                </li>
                                <li className="nav-item ml-2">
                                    <Link to='/contact/' className="nav-link"> Contact</Link>
                                </li>
                            </ul>        
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
                <Route path="/home" component={Home} />
                <Route path="/about/" component={About} /> 
                <Route path="/contact/" component={Contact}/>
        </Router>
            )
        }
}
export default AppNavbar;