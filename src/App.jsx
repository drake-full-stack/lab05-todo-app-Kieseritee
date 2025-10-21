import { useState } from "react";
import "./App.css";
import Task from "./components/Task/"
import InputTask from "./components/InputTask";
function App() {
 return(
  <>
  <h1>My To Do List</h1>
  <InputTask placeholder = "HAHHAHHAH" />
  <Task text= "Walk the President" />


  </>

 );
}

export default App;
