import React from 'react';
import styled from 'styled-components';

const LaneStyle = styled.div`
  height: 75px;
  width: 1000px;
  background-color: orange;
  border: solid;
  border-width: thin;
`;

export default function Lane(props) {
  console.log(props.items, 'items');
  return (
    <LaneStyle>
      <div id="lane">
        {props.items.map(person => {
          <div key={person.name}>Hi</div>;
        })}
      </div>
    </LaneStyle>
  );
}
