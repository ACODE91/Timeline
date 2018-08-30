import React from 'react';

function Timeline(props) {
  const list = props.people.map(person => (
    <div className="person" key={person.name}>
      {person.name}
    </div>
  ));

  return <div id="timeline">{list}</div>;
}

export default Timeline;
