import React from "react";
import Selective_item from "./Selective_item";
import Data from "../Dataset/Content_category.json";

const Selective_card = ({ SubLessonArray, set_Video_URL }) => {
  return (
    <>
      <div className="selective-card">
        <div className="selective-angle-point"></div>
        {SubLessonArray && SubLessonArray.length > 0 ? (
          SubLessonArray.map((item, index) => (
            <Selective_item
              key={index}
              lesson_content={item}
              index={index}
              set_URL={set_Video_URL}
            />
          ))
        ) : (
          <p>Select a topic to view its subtopics</p>
        )}
      </div>
    </>
  );
};
export default Selective_card;
