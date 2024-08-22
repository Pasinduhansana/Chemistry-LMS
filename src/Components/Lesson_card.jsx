import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Lessons from "../Dataset/Lessons.json";

const Lesson_card = ({ item, index, setSublesson }) => {
  return (
    <>
      <div
        className="Lesson-item-content"
        onClick={() => {
          Lessons[index].content.map((item, index) => {
            setSublesson();
          });
        }}
      >
        <div className="lesson-rounded-rectangle">
          <div className="text-field">{item.lesson}</div>
          <div className="navigate-circle">
            <div className="inner-navigate-circle">
              <div className="navigate-icon">
                <FontAwesomeIcon
                  className="Navigation-icon"
                  icon={faAngleRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lesson_card;
