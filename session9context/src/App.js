import { useContext } from "react";
import "./App.css";
import { Header } from "./Component/Header";
import { Language } from "./Component/Language";
import { Popup } from "./Component/Popup";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const loginContext = useContext(LoginContext);
  return (
    <div className="App">
      <Header />
      {!loginContext.login && <Popup />}
      <Language />
    </div>
  );
}

export default App;
