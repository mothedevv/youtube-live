import React,{ Component }  from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import '../../components/Dashboard/style.css'
import Person from './6536543.png';
import Artist from '../../images/bb.jpeg'

class Profile extends Component
{
    state = { clicked: false }

	handleClick=()=>
	{
		this.setState ({ clicked: !this.state.clicked })
	}

    
    render()
    {
        return(

            <Router>
                <div>
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
                                        <Link to="/profile">
                                            <span className="icon is-small"><i className="fa fa-image"></i></span>
                                            <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-2" id="2" className={this.state.clicked ? 'is-active' : 'li'}>
                                        <Link to="/myvenues">
                                            <span className="icon is-small"><i className="fab fa-empire"></i></span>
                                            <span>My Venues</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-3" id="3" className={this.state.clicked ? 'is-active' : 'li'}>
                                        <Link to="/myartists">
                                            <span className="icon is-small"><i className="fab fa-superpowers"></i></span>
                                            <span>My Artists</span>
                                        </Link>
                                    </li>
                                    <li data-target="#pane-4" id="4" className={this.state.clicked ? 'is-active' : 'li'}>
                                        <Link to="/search">
                                            <span className="icon is-small"><i className="fa fa-film"></i></span>
                                            <span>Search</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        
                    <div className="profile-page"> 
                        <div className="info">
                            <div className="image">
                                <img alt="Profile Pic"className="center-cropped" src={Person}></img>
                            </div>
                            <h1 className="genres">Favorite Genres <i className="fas fa-plus"></i></h1>
                            <div className="genres">
                                <span id="genreTags" class="tag is-info">Rock</span>
                                <span id="genreTags" class="tag is-info">Pop</span>
                                <span id="genreTags" class="tag is-info">R&B</span>
                            </div>
                            <h1 className="artists">Artists Seen <i className="fas fa-plus"></i></h1>
                            <div className="artists">
                                <span id="artistTags" class="tag is-info">The Weeknd</span>
                                <span id="artistTags" class="tag is-info">Twenty-One Pilots</span>
                                <br></br>
                                <span id="artistTags" class="tag is-info">Disturbed</span>
                                <span id="artistTags" class="tag is-info">Breaking Benjamin</span>
                                <span id="artistTags" class="tag is-info">KISS</span>
                            </div>
                            <div className="card-container">
                                
                                <div className="profile-info">
                                    <h1 className="name">Ayo Ogunseide</h1>
                                    <span className="location">
                                        <p><i className="fas fa-map-marker-alt"/>  Columbus, OH</p>
                                    </span>
                                </div>
                                
                            </div>

                        </div>

                    <Switch>
                        <Route path="/myartists" component={MyArtists} exact />
                        <Route path="/myvenues" component={MyVenues} exact />
                        <Route path="/search" component={Search} exact />
                    </Switch>

                </div>
                </div>
            </Router>

            
            
        )

        
    }
    
    
    
}

const MyArtists=()=>
{
    
    return(
        <div classname="card">
            <div className="card-content">

            </div>
        </div>
        
        
        
    )
}

const MyVenues=()=>
{
    return(<div classname="card">
        <div classname="card-content">

        </div>
    </div>)
}

const Search=()=>
{
    return(<h1>Search</h1>)
}


export default Profile;