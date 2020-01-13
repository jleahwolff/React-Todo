import React from 'react';

const Todo = props =>
{
    return (
        <div>
            <p
            className={`Todo${props.task.completed ? ' completed ' : ''}`}
            onClick = {() => props.toggleCompleted(props.task.id)}
            >
                {props.task.name}
            </p>
        </div>
    )
}

export default Todo;