import React, { Component } from 'react';

class ListDecks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    ajaxHelpers.getProducts(function(data) {
      if (data) {
        this.setState({data: data})
      } else {
        this.setState({error: true})
      }
    }.bind(this))
  }

  renderData() {
    return this.state.data.map(function(item, index) {
      return (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      );
    });
  }

  render() {
    if (this.state.error) {
      return (
        <p>There was an error.</p>
      )
    }

    if (this.state.data) {
      return (
        <div>
          <p>We got data</p>
          {this.renderData()}
        </div>
      )
    }

    return (
      <p>Loading products...</p>
    );
  }
}

export default ListDecks;
