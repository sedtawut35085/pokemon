import ReactDOM from "react-dom/client";
import "./style/global.css";
import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);
