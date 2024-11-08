import { useState } from "react";
import "./App.css";

function App() {
  let [todo, settodo] = useState([]);

  let savetodo = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;
    if (!todo.includes(toname)) {
      let finaltodo = [...todo, toname];
      settodo(finaltodo);
    } else {
      alert("‘Taskly’ is already hard at work!");
    }
  };
  let list = todo.map((value, index) => {
    return (
      <ToDoListItem
        value={value}
        key={index}
        indexnumber={index}
        todo={todo}
        settodo={settodo}
      />
    );
  });

  return (
    <div className="App">
      <h1> Daily Dash Taskly </h1>
      <form onSubmit={savetodo}>
        <input type="text"  placeholder="Add your Taskly here" name="toname" /> <button>Save Taskly</button>
      </form>
      <div className="outer">
        <ul>{list}</ul>
      </div>
    </div>
  );
}
export default App;

function ToDoListItem({ value, indexnumber, todo, settodo }) {
  let [status,setStatus] = useState(false)
  let Delete = () => {
   
    let finalData = todo.filter((v,i)=>i!==indexnumber)
    settodo(finalData);
  }
  let checkstatus = () => {
    setStatus(!status)
  }

  return (
    <li  className={(status) ? 'completetodo': ''  } onClick={checkstatus}>
      {value}
      <samp onClick={Delete}>&times;</samp>
    </li>
  );
}
