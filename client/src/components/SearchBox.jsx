import React, { Component } from 'react';


class SearchBox extends Component {
state = { term: "" };
onInputChange=(event) => {
  this.setState({term: event.target.value})
}
   onFormSubmit = (event) => {
     event.preventDefault();
      this.props.onFormSubmit(this.state.term);
  }
  
    render() {
      return (
        <div className="search-box">
         <form onSubmit={this.onFormSubmit} className="form" >
         <label htmlFor="search">Search</label>
          <input
          onChange={this.onInputChange} type="text" id="search" 
          placeholder="Live Music..." 
          value={this.state.term}>
          </input>
          </form>
          </div> 
        
      );
   }
}
 

export default SearchBox;
  
