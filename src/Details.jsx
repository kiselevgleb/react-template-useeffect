import React, { useState } from 'react'

function Details(props) {
  return (
    <>
    <ul className="list" key={props.info.id}>
          <li className="list-item"><img src={props.info.rates.avatar}></img></li>
          <li className="list-item">{props.info.rates.name}</li>
          <li className="list-item">{props.info.rates.details.city}</li>
          <li className="list-item">{props.info.rates.details.company}</li>
          <li className="list-item">{props.info.rates.details.position}</li>
      </ul>
    </>);
}

export default Details;
