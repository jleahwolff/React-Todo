// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    return (
        <div className="to-do-list">
            {props.tasks.map(task => (
                <Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted} />
            ))}
            <button className='delete-button' onClick={props.deleteTask}>
                Delete Finished Tasks
            </button>
        </div>
    );
};

export default TodoList;