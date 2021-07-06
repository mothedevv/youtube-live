import React from "react";
import sgVenueAPI from "../../utils/sgVenueAPI";

export default class FetchVenueData extends React.Component {
    
    state = {
        loading: true,
        venue: [],
    }
    componentDidMount(){
        const data = sgVenueAPI();
        this.setState({venue: data.venues})
    }

    
    render(){
        return (
            <div>
                {this.state.loading || !this.state.venue ? (<div>looking for your venues!</div>) 
                : ( 
                    <div>{this.state.venues.map(venue => 
                    <card>
                       <h2 key={venue.id}>{venue.name}</h2>   
                       <p>{venue.address}</p> 
                       <a src={venue.stat.url}>Go to Venues Website!</a>
                    </card>                   
                    )}</div>
                    )}
            </div>
        )
    }

}