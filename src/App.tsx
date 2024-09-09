import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleCallback from "./pages/Callback/GoogleCallback";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth/google_auth/callback"
            element={<GoogleCallback />}
          />
          <Route path="/me" element={<UserInfo />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
