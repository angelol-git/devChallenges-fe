import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import SimpleCoffee from "./pages/simpleCoffee/SimpleCoffee";
import Translate from "./pages/translate/Translate";
import GitHubProfile from "./pages/githubProfile/GitHubProfile";
import CountryTable from "./pages/worldRanks/CountryTable";
import Country from "./pages/worldRanks/Country";

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
          <Route path="/githubProfile" element={<GitHubProfile />} />
          <Route path="/countryTable" element={<CountryTable />} />

          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
