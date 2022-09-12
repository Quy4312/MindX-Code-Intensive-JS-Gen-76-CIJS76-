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

  const removeTask = () => {
    // let clonelist = [...list];
    // clonelist.splice(2, 1);
    const newlist = list.filter((item) => item.text != "Jogging");
    setList(newlist);
  };
  return (
    <div className="App">
      <Search />
      <Button
        content={"Remove task: Jogging"}
        onClick={() => removeTask("Jogging")}
      />
      <div className="List">
        <List list={list} />
      </div>
      <Footer />
    </div>
  );
}
function Search() {
  return <input className="search" placeholder="Enter your task here" />;
}
function List(props) {
  const { list } = props;
  return (
    <div>
      {list.map((item) => (
        <TodoItem key={item.id} check={item.check} text={item.text} />
      ))}
    </div>
  );

  // return (<div className='ListItem'>
  //   <div className='checkbox'></div>
  //   <label >{props.text}</label>
  //   </div>)
}
function TodoItem(props) {
  return (
    <div className="ListItem">
      <div className="checkbox"></div>
      <label>{props.text}</label>
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
