import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../../components/Header";
import "./Translate.css";
import "../../assets/styles/reset.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function Translate() {
  return (
    <div className="translate__container">
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    </div>
  );
}

export default Translate;
