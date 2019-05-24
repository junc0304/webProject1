import React, { Component, Fragment } from 'react';
import {CardDeck} from 'react-bootstrap';
import { RentCard } from './Card';

//card template
const Deck = (props) =>  {
    return  (
      <CardDeck> 
        { props.data.map((item, i) => <RentCard id={i} data={item} />)} 
      </CardDeck> 
    );
}
export default Deck;