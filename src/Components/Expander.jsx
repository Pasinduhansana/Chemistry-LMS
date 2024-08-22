import React from "react";
import Expander_item from "./Expander_Item";
import Data from "../Dataset/Sampletext2.json";
import Material_content from "./Material_content";

const expanderitemheader = document.querySelectorAll(".expander-header");

expanderitemheader.forEach((expanderitemheader) => {
  expanderitemheader.addEventListener("click", (event) => {
    expanderitemheader.classList.toggle("active");
  });
});

const Expander = ({ item }) => {
  return (
    <div className="expander">
      <div className="expander-header">
        <div className="headertile">{item.title}</div>
        <div className="notify-bubble">{item.notifiers}</div>
      </div>

      <div className="expander-body">
        <div className="expander-body-content">
          <div className="item-headers">
            <div className="iconh">
              <div className="icon"></div>
              <div>Name</div>
            </div>

            <div className="iconh">
              <div className="icon"></div>
              <div>Description</div>
            </div>

            <div className="iconh">
              <div className="icon"></div>
              <div>Type</div>
            </div>

            <div className="iconh-checkbox">
              <div className="icon">
                <input className="checkbox" type="checkbox"></input>
              </div>
            </div>
          </div>

          {Data.map((content, index) => {
            return (
              <>
                <Expander_item key={index} item={content} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expander;
