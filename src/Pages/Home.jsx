import React from "react";
import Category_card from "../Components/Category_card";
import Selective_card from "../Components/Selective_card";
import Data from "../Dataset/Content_category.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="header-title"></div>

      <div className="shade-card">
        <div className="sub-title">content Management</div>

        <div className="contents">
          <div className="content-div">
            {Data.map((item, index) => (
              <Link
                to={`/Course-content/`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Category_card content={item.title} img_url={item.img} />
              </Link>
            ))}
          </div>
          <div className="sub-content-div">
            <Selective_card />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
