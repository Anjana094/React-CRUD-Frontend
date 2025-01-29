import React from 'react';
import { deleteTask, updateTask } from '../Api';

const TaskList = ({ tasks, onTaskDeleted, onTaskUpdated }) => {
    const handleDelete = async (id) => {
        await deleteTask(id);
        onTaskDeleted(id);
    };

    const handleToggleComplete = async (task) => {
        const updatedTask = { ...task, completed: !task.completed };
        const { data } = await updateTask(task._id, updatedTask);
        onTaskUpdated(data);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">📋 Task List</h2>
            <div className="row">
                {tasks.map((task) => (
                    <div key={task._id} className="col-md-6 mb-3">
                        <div className={`card shadow-sm border-0 ${task.completed ? 'bg-light' : ''}`}>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div className='col-md-4'>
                                    <h5 className={`card-title ${task.completed ? 'text-muted text-decoration-line-through' : ''}`}>
                                        {task.title}
                                    </h5>
                                    <p className="card-text text-muted">{task.description}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleToggleComplete(task)}
                                        className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'} me-2`}
                                    >
                                        {task.completed ? 'Undo' : '✔ Complete'}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(task._id)}
                                        className="btn btn-sm btn-danger"
                                    >
                                        ❌ Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
