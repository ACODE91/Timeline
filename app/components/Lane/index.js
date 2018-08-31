import React from 'react';
import styled from 'styled-components';

const LaneStyle = styled.div`
  height: 27px;
  width: 1500px;
`;

const Person = styled.div`
  position: relative;
  background-color: red;
  height: 27px;
  border: solid;
  border-width: thin;
  display: inline-block;
`;

export default function Lane(props) {
  return (
    <LaneStyle>
      <div id="lane">
        {props.items.map(person => (
          <Person>
            <div key={person.name}>
              {person.name} : {person.birth} -{' '}
              {person.death > -1 ? person.death : ''}
            </div>
          </Person>
        ))}
      </div>
    </LaneStyle>
  );
}
