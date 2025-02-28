import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import '../index.css'

function TaskCard({ task }) {

  const { deleteTask } = useContext(TaskContext)

  return (
    <div className="bg-gray-800 text-white px-5 py-2.5 pb-5 rounded">
      <h1 className="text-4xl font-bold">{task.title}</h1>
      <p className="text-gray-400">{task.description}</p>
      <button onClick={() => { deleteTask(task.id) }}
        className="bg-red-500 px-2 py-1 rounded my-2"
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
