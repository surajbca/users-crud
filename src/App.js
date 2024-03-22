import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import CustomForm from "./Components/CustomForm";
import VideoPlayer from "./Components/VideoPlayer";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Add />} />
            <Route path="edit" element={<Edit />} />
            <Route path="loginform" element={<LoginForm />} />
            <Route path="customform" element={<CustomForm />} />
            <Route path="VideoPlayer" element={<VideoPlayer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
