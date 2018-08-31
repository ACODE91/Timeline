import React from 'react';
import styled from 'styled-components';
import Summary from '../Summary/index.js';
import Lane from '../Lane/index.js';

const Person = styled.div`
  position: relative;
  background-color: aqua;
  border: solid;
  border-width: thin;
  width: 300px;
  height: 50px;
`;

const Container = styled.div`
  border: solid;
  border-width: thin;
`;

function Timeline(props) {
  const timelineSort = array => {
    const copy = array.slice();
    copy.sort((a, b) => a.birth - b.birth);
    const result = [];

    while (copy.length > 0) {
      let current = copy[0];
      let currentDeath = current.death;
      const tuple = [current];
      let found = true;
      copy.shift();

      while (found) {
        found = false;
        if (currentDeath === -1) {
          break;
        }
        for (let i = 1; i < copy.length; i++) {
          if (copy[i].birth > currentDeath) {
            tuple.push(copy[i]);
            current = copy[i];
            currentDeath = current.death;
            copy.splice(i, 1);
            found = true;
            break;
          }
        }
      }

      result.push(tuple);
    }

    return result;
  };

  const timelineMatrix = timelineSort(props.people).reverse();
  //   const list = props.people.map(person => (
  //     <Person>
  //       <div
  //         className="person"
  //         key={person.name}
  //         onMouseEnter={() => {
  //           props.hoverFn(person.summary, person.name);
  //         }}
  //         onMouseLeave={() => {
  //           props.hoverOffFn();
  //         }}
  //       >
  //         {props.currentName === person.name ? (
  //           <Summary summaryProp={props.currentSummary} />
  //         ) : (
  //           <div />
  //         )}
  //         {person.name} : {person.birth} - {person.death > -1 ? person.death : ''}
  //       </div>
  //     </Person>
  //   ));

  return (
    <div>
      <Container>
        <div id="container">
          {timelineMatrix.map(lane => <Lane items={lane} />)}
        </div>
      </Container>
    </div>
  );
}

export default Timeline;
