import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
