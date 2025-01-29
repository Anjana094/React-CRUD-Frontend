import React, { useState, useEffect } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { fetchTasks } from '../Api';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const { data } = await fetchTasks();
            setTasks(data);
        };
        getTasks();
    }, []);

    const handleTaskAdded = (task) => setTasks([...tasks, task]);
    const handleTaskDeleted = (id) => setTasks(tasks.filter((task) => task._id !== id));
    const handleTaskUpdated = (updatedTask) =>
        setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Task Manager</h1>
            <AddTask onTaskAdded={handleTaskAdded} />
            <TaskList
                tasks={tasks}
                onTaskDeleted={handleTaskDeleted}
                onTaskUpdated={handleTaskUpdated}
            />
        </div>
        
    );
};

export default Home;

