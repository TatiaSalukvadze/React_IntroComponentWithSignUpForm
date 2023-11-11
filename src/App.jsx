import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Header />
      <Form />
    </div>
  );
}

export default App;
