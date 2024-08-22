import "./App.css";
import Category_card from "./Components/Category_card";
import Selective_card from "./Components/Selective_card";
import Data from "./Dataset/Content_category.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Video_resource from "./Pages/Video_resource";
import Course_content from "./Pages/Course_Content";
import Admin_resources_management from "./Pages/Admin_resources_management";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Video-resource" element={<Video_resource />} />
          <Route path="/Course-content" element={<Course_content />} />
          <Route
            path="/Admin-Content-Management"
            element={<Admin_resources_management />}
            /* Course-content */
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
