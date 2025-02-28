import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from '../data/task'

export const TaskContext = createContext();
export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        document.title = "React Fatz";
        setTasks(data);
    }, []);

    function createTask(taskTitle, taskDescription) {
        setTasks([...tasks, {id: tasks.length, title: taskTitle, description: taskDescription}]);
    }

    function deleteTask(taskID) {
        setTasks(tasks.filter((task) => task.id !== taskID));
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}
