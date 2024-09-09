import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/me" element={<UserInfo />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
