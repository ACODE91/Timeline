import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: solid;
  border-width: thin;
  height: 200px;
  width: 500px;
  background-color: white;
  position: relative;
  z-index: 1;
`;

export default function Summary(props) {
  return (
    <Container>
      <div>{props.summaryProp}</div>
    </Container>
  );
}
