import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css'
import 'bulma/css/bulma.min.css';



class Dashboard extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {clicked: false}

        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick=()=>
    {
        this.setState({ 
            clicked: !this.state.clicked,
            className: "is-active"
        });

    }



    render(ID, className)
    {
        

        return (
            <Router>
                <div>
                    <body>
                        <section className="hero is-info-dashboard">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title"> 
                                        Person logged in
                                    </h1>
                                    <h2 className="subtitle">
                                        welcome back!
                                    </h2>
                                </div>
                            </div>
                            <div className="tabs is-boxed is-centered main-menu" id="nav">
                                <ul>
                                    <li data-target="#pane-1" id="1" className={this.state.clicked ? 'is-active' : 'li'} >
                                        <a>
                                            <span className="icon is-small"><i className="fa fa-image"></i></span>
                                            <span>My Playlists</span>
                                        </a>
                                    </li>
                                    <li data-target="#pane-2" id="2" className={this.state.clicked ? 'is-active' : 'li'}>
                                        <a>
                                            <span className="icon is-small"><i className="fab fa-empire"></i></span>
                                            <span>My Venues</span>
                                        </a>
                                    </li>
                                    <li data-target="#pane-3" id="3" className={this.state.clicked ? 'is-active' : 'li'}>
                                        <a>
                                            <span className="icon is-small"><i className="fab fa-superpowers"></i></span>
                                            <span>My Artists</span>
                                        </a>
                                    </li>
                                    <li data-target="#pane-4" id="4" className={this.state.clicked ? 'is-active' : 'li'}>
                                        <a>
                                            <span className="icon is-small"><i className="fa fa-film"></i></span>
                                            <span>Find Something New</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </section>
                    </body>
                </div>
            </Router>
        )
    }
    
    
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
export default Dashboard;