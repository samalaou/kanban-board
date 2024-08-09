import {Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";  
import ErrorPage from "./pages/ErrorPage"; 
import TaskDetailsPage from "./pages/TaskDetailsPage"; 
import './App.css'
import tasksList from "./assets/kanban.json";


function App() {

  const [tasks, setTasks] = useState(tasksList);

  const handleOnClickBtn = (id) => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
  };

  const createTask = (newTask) => {
    const tasksIds = tasks.map((task) => task.id);
    setTasks([...tasks, { ...newTask, id: Math.max(...tasksIds) +1 }]);
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
    ));
}


  return (
    <div className='App'>
      <NavBar/>
      <div className='main-content'>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage tasks={tasks} onClickDelete={handleOnClickBtn} createTask={createTask}/>} /> 
          <Route path="/about" element={<AboutPage />} />
          <Route path="/task/:id" element={<TaskDetailsPage tasks={tasks} onClickDelete={handleOnClickBtn} updateTask={updateTask}/>} />
          <Route path="*" element={ <ErrorPage /> } /> 
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
