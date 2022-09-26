import "./App.css";
import { useState } from "react";
import { Button } from "./component/Button";

function App() {
  const [list, setList] = useState([
    { id: "1", check: false, text: "Clean up bedroom" },
    { id: "2", check: false, text: "Buy some milk" },
    { id: "3", check: false, text: "Jogging" },
    { id: "4", check: false, text: "Learn React" },
    { id: "5", check: false, text: "Doing Exercises" },
  ]);

  const removeTask = (id) => {
    const newlist = list.filter((item) => item.id != id);
    setList(newlist);
  };
  const doTask = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) return { ...item, check: !item.check };
      return item;
    });
    setList(newList);
  };
  return (
    <div className="App">
      <Search />
      <div className="List">
        <List list={list} removeTask={removeTask} doTask={doTask} />
      </div>
      <Footer />
    </div>
  );
}
function Search() {
  return <input className="search" placeholder="Enter your task here" />;
}
function List(props) {
  const { list, removeTask, doTask } = props;
  return (
    <div>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          check={item.check}
          text={item.text}
          removeTask={removeTask}
          doTask={doTask}
        />
      ))}
    </div>
  );
}
function TodoItem(props) {
  return (
    <div className="ListItem">
      <div className="checkbox"></div>
      <div
        className={`${props.check ? "true" : ""}`}
        onClick={() => props.doTask(props.id)}
      >
        {props.text}
      </div>
      <div>
        <button onClick={() => props.removeTask(props.id)}>remove</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div>5 task left</div>
      <div>MindX todolist</div>
    </div>
  );
}

export default App;
