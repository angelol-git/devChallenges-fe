import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SimpleCoffee from "./pages/simpleCoffee/simpleCoffee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simpleCoffee" element={<SimpleCoffee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
