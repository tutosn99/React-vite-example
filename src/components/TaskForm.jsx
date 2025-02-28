import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const { createTask } = useContext(TaskContext)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="py-5 px-4 mb-5 flex justify-center items-center flex-col gap-1 bg-slate-800">
      <input
        value={title}
        placeholder="Escribe tu Tarea:"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        autoFocus
        className="border-2 border-white px-2 w-75 rounded-lg text-white"
      />
      <textarea
        value={description}
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="border-2 px-2 w-65 rounded-xl text-white"
      ></textarea>
      <button type="submit" className="border-1 px-4 py-1 bg-gray-700 text-white">Guardar</button>
    </form>
  );
}

export default TaskForm;
