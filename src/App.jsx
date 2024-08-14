import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SimpleCoffee from "./pages/simpleCoffee/simpleCoffee";
import Translate from "./pages/translate/Translate";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simpleCoffee" element={<SimpleCoffee />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
