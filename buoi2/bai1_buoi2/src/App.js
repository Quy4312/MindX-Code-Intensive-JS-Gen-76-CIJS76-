import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <div className='List'>
      <List text="Clean up bedroom" />
      <List text="Buy some milk" />
      <List text="Jogging" />
      <List text="Learn React" />
      <List text="Doing Exercises" />
      </div>
    </div>
  );
}
function Search(){
  return <input className="search" placeholder='Enter your task here' />
 
}
function List(props){
  return (<div className='ListItem'>
    <input type="radio" className="checkbox" id='checkbox1'/>
    <label for="">{props.text}</label>
    </div>)
}

export default App;
