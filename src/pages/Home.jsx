import { useState } from 'react';
import Todo from '../components/Todo';

const Home = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleTodoChange = (e) => setTodo(e.target.value);

  const handleTodoSave = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo('');
  };

  const handleTodoDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const todoElementList = todoList.map((todo, index) => (
    <Todo task={todo} onDelete={() => handleTodoDelete(index)} />
  ));
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleTodoSave}>
        <input
          value={todo}
          onChange={handleTodoChange}
          placeholder="Add a todo"
          required
        />
        <button type="submit">+</button>
      </form>
      {todoElementList}
    </>
  );
};

export default Home;
