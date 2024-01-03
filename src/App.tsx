import "./App.css";
import Header from "./components/Header";
import GlobalContextProvider from "./context/GlobalContext";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <Header />
        <Router />
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}

export default App;
