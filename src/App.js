import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // const name = 'Cembuba';

  const[showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Text1",
      day: "Day1",
      reminder: true,
    },
    {
      id: 2,
      text: "Text2",
      day: "Day2",
      reminder: true,
    },
    {
      id: 3,
      text: "Text3",
      day: "Day3",
      reminder: false,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
  }


  //Reminder
  const Reminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //Add Task
  const addTask = (task) => {
    const id= Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks , newTask])
  }

  // ? -> then : -> else
  return (
    <div className="container">
      {/* <Header title="CemBuba"/> */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={Reminder} /> : 'Nothing to show'}
    </div>
  );
}

export default App;
