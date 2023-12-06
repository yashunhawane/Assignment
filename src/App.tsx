import { Route, Routes } from "react-router-dom";
import "./App.css";
import Component1 from "./component/Component1";
import Form from "./pages/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/Component1" element={<Component1 />} />
    </Routes>
  );
}

export default App;
