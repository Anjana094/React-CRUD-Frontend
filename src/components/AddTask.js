import React, { useState } from 'react';
import { createTask } from '../Api';

const AddTask = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { title, description };
        const { data } = await createTask(task);
        onTaskAdded(data);
        setTitle('');
        setDescription('');
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">➕ Add a New Task</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Task Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="Enter task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-bold">Task Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        placeholder="Enter task description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">🚀 Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
