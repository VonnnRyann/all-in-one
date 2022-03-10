import React from 'react'

const Form = ({taskInput, setTaskInput, handleSubmit, inputRef}) => {


  return (
    <form>
      <input 
        type="text"
        placeholder='Please Enter a todos'
        ref={inputRef}
        maxLength= '50'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
       />

       <button onClick={handleSubmit}>Add task</button>
    </form>
  );
};

export default Form