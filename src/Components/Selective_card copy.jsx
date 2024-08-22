import React from "react";
import Selective_item from "./Selective_item";
import Data from "../Sample_data/Sampletext1.json";

const Selective_card = (index_id) => {
  return (
    <>
      <div className="selective-card">
        <div className="selective-angle-point"></div>

        {Data.map((item, index) => {
          return (
            <>
              <Selective_item key={index} lesson_content={item} />
            </>
          );
        })}
      </div>
    </>
  );
};
export default Selective_card;
