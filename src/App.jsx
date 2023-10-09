import { useState } from "react";
import "./App.css";
import { Signin, Signup } from "./components/index";

function App() {
  const [isSigned, setIsSigned] = useState(true);

  return (
    <>
      {isSigned ? (
        <Signin setIsSigned={setIsSigned} />
      ) : (
        <Signup setIsSigned={setIsSigned} />
      )}
    </>
  );
}

export default App;
