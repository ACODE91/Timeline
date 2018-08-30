import React from 'react';

function Input(props) {
  return (
    <div>
      Enter Name:{' '}
      <input
        type="text"
        // onChange={e => {
        //   props.typeFn(e.target.value);
        // }}
      />
      Enter Birth:{' '}
      <input
        type="text"
        // onChange={e => {
        //   props.typeFn(e.target.value);
        // }}
      />
      Enter Death:{' '}
      <input
        type="text"
        // onChange={e => {
        //   props.typeFn(e.target.value);
        // }}
      />
      Enter Summary:{' '}
      <input
        type="text"
        // onChange={e => {
        //   props.typeFn(e.target.value);
        // }}
      />
      <input
        type="button"
        value="Submit"
        onClick={() => {
          props.handleSubmit();
        }}
      />
    </div>
  );
}

export default Input;
