import React, { useState, useEffect } from 'react'
import Details from './Details';

function List(props) {
  const { notes } = props;
  const [info, setInfo] = useState(null);
  const [viewId, setId] = useState("");
  useEffect(() => {
    if (viewId == "") {
      return;
    } else {
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${viewId.id}.json`)
        .then(response => response.json()
        )
        .then(rates => {
          setInfo({rates});
        });
    }
  }, [viewId])

  const view = id => {
    if(id!==viewId.id){
    setId({ id });}
  }

  return (
    <>
      <ul className="list">
        {notes.map(o =>
          <li className="list-item" key={o.id} onClick={() => view(o.id)}>{o.name}</li>
        )}
      </ul>
      {info != null && <Details info={info} />}
    </>);
}

export default List;
