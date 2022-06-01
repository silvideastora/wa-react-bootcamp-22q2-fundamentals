import React from 'react';
import PropTypes from 'prop-types';

function Todo({task, deleteClick}) {
    return(
        <ol>
            {task}
            <button
            onClick={e => deleteClick(e, task)}>
            -
            </button>
            </ol>
    )
}
Todo.propTypes = {
    task: PropTypes.string.isRequired,
    deleteClick: PropTypes.func.isRequired,
};

export default Todo;