import React, { Component } from 'react';
import AddEditDeck from './AddEditDeck';

const DeckContent = React.createClass({


  render: function() {
    console.log("We're in Deck Content");
    return (
      <div>
        <p>Deck Content</p>
      </div>
    );
  }
});

export default DeckContent;
