import React from 'react';
//TODO: Finish implementing the event handlers for the inputs.

function Input(props) {
  return (
    <div>
      Enter Name: <input type="text" />
      Enter Birth: <input type="text" />
      Enter Death: <input type="text" />
      Enter Summary: <input type="text" />
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
