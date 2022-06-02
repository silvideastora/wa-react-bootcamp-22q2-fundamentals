import React, { useState } from 'react';
import Todo from '../components/Todo';

export default function Home() {
    const [tasks, setTasks] = useState([]);     // variables de estado para la lista de tareas
    const [textInput, setTextInput] = useState();       // variables para el input

    const handlerClick = (e) => {
      e.preventDefault();
    if(textInput !== '') {
        setTasks([...tasks, textInput])
    setTextInput('');
    }
};
    const deleteClick = (taskToRemove) => {
        setTasks(tasks.filter(task => task !== taskToRemove))
    };
    return (
    <div className="App">
      <p>To Do App </p>
      <form>
        <input 
          type="text"
          value={textInput}
          onChange={(e)=> setTextInput(e.target.value)}
          />
        <button
        onClick={handlerClick}
        >
          +
        </button>
      </form>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <Todo key={index} task={task} deleteClick={deleteClick}/>
          ))}
        </ul>
      </div>
    </div>
  );
};