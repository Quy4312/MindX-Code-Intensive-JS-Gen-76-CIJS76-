import { Addexpense } from "./Component/Addexpense";
import "./App.css";
import { useState } from "react";
import { Chart } from "./Component/Chart";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputname, setInputname] = useState("");
  const [inputamount, setInputamount] = useState("");
  const [inputdate, setInputdate] = useState("");
  const [modalopen, setModalopen] = useState(false);
  const [list, setList] = useState([
    {
      id: uuidv4(),
      name: "Some book",
      date: "16/1/2022",
      price: 50,
    },
    {
      id: uuidv4(),
      name: "Electricity Bill",
      date: "10/10/2022",
      price: 75,
    },
    {
      id: uuidv4(),
      name: "New Bike",
      date: "1/5/2022",
      price: 100,
    },
  ]);

  const handleOpenModal = () => {
    setModalopen(true);
  };
  const handleAddbtn = () => {
    const newExpense = {
      id: uuidv4(),
      name: inputname,
      date: inputdate,
      price: inputamount,
    };
    setList([...list, newExpense]);
    setTimeout(() => {
      setModalopen(false);
    }, 1000);
    setInputdate("");
    setInputname("");
    setInputamount("");
  };
  const handleCancelbtn = () => {
    setModalopen(false);
    setInputdate("");
    setInputname("");
    setInputamount("");
  };
  function handleInputChangename(e) {
    setInputname(e.target.value);
  }
  function handleInputChangeamount(e) {
    setInputamount(e.target.value);
  }
  function handleInputChangedate(e) {
    setInputdate(e.target.value);
  }
  console.log(inputname);
  console.log(inputamount);
  console.log(inputdate);
  return (
    <div className="App">
      <Addexpense
        inputname={inputname}
        inputamount={inputamount}
        inputdate={inputdate}
        handleInputChangename={handleInputChangename}
        handleInputChangeamount={handleInputChangeamount}
        handleInputChangedate={handleInputChangedate}
        modalopen={modalopen}
        handleOpenModal={handleOpenModal}
        handleAddbtn={handleAddbtn}
        handleCancelbtn={handleCancelbtn}
      />
      <Chart modalopen={modalopen} list={list} />
    </div>
  );
}

export default App;
