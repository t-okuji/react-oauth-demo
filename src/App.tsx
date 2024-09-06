import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleCallback from "./pages/Callback/GoogleCallback";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/google_auth/callback" element={<GoogleCallback />} />
        <Route path="/me" element={<UserInfo />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
