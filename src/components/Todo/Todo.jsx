import PropTypes from 'prop-types';

const Todo = ({ task, onDelete }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <p>{task}</p>
      <button onClick={onDelete}>-</button>
    </div>
  );
};

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
