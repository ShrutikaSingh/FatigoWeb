import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from '../component/navbar';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';


class Routes extends Component{
    render(){
        return(
            <Router>
                <NavBar/> 
                <Route path="/home" component={Home} />
                <Route path="/about/" component={About} /> 
                <Route path="/contact/" component={Contact}/>
            </Router>
            
        )

        
    }
};

export default Routes;

