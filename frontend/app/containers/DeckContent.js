import React, { Component } from 'react';
import ReactPivot from 'react-pivot';

const DeckContent = React.createClass({

rows : [
  {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"399.73","date":"2012-02-02T08:00:00.000Z","business":"Kozey-Moore","name":"Checking Account 2297","type":"deposit","account":"82741327"}},
  {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"768.84","date":"2012-02-02T08:00:00.000Z","business":"Herman-Langworth","name":"Money Market Account 9344","type":"deposit","account":"95753704"}}
],

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
