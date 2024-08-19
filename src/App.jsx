import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import SimpleCoffee from "./pages/simpleCoffee/simpleCoffee";
import Translate from "./pages/translate/Translate";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simpleCoffee" element={<SimpleCoffee />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
