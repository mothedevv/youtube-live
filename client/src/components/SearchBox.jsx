import React, { Component } from 'react';


class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

    onInputChange(term) {
      this.setState({ term: term });
      this.props.onChange(term);
  }
  
    render() {
      return (
        <div className="search-box">
          <input
          placeholder="Search Live Music..."
          value={this.state.term} 
          onChange={(event) => {
            this.onInputChange(event.target.value)
          }}
          
          />
        </div>
      );
   }
}
 

export default SearchBox;
  
