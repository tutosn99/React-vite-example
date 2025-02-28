import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto w-8/10 py-5">
        <TaskForm/>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;

// rfce: Crea un componente de forma rápida
{
  /* ul>li*6>a{Numero $ */
}
