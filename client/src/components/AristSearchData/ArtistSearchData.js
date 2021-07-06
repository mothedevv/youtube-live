import React from "react";
import seatgeekAPI from "../../utils/seatgeekAPI";

export default class AristSearchData extends React.Component {
    
    state = {
        loading: true,
        performers: [],
    }
    componentDidMount(){
        const data = seatgeekAPI();
        this.setState({performers: data.performers})
    }

    
    render(){
        return (
            <div>
                {this.state.loading || !this.state.performers ? (<div>looking for your artist!</div>) 
                : ( 
                    <div>{this.state.performers.map( performer => 
                    <card>
                       <h2 key={performer.id}>{performer.name}</h2>   
                       <p>{performer.num_upcoming_events}</p> 
                    </card>                   
                    )}</div>
                    )}
            </div>
        )
    }

}