import React from 'react';
import styled from 'styled-components';

const Person = styled.div`
  background-color: aqua;
  border: solid;
  border-width: thin;
`;

function Timeline(props) {
  const list = props.people.map(person => (
    <Person>
      <div className="person" key={person.name}>
        {person.name} : {person.birth} - {person.death > -1 ? person.death : ''}
      </div>
    </Person>
  ));

  return <div id="timeline">{list}</div>;
}

export default Timeline;
