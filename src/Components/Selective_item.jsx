import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Selective_item = ({ lesson_content, set_URL }) => {
  return (
    <>
      <div className="selective-item">
        <div
          className="rounded-rectangle"
          onClick={() => {
            const lesson_title = document.getElementById("lesson-title-id");
            const lesson_description = document.getElementById(
              "lesson-description-id"
            );
            lesson_title.textContent = lesson_content.Sub_lesson;
            lesson_description.textContent = lesson_content.Description;
            set_URL(lesson_content.materials[0].link);
          }}
        >
          <div className="sub-text-field">{lesson_content.Sub_lesson}</div>
          <div className="navigate-circle">
            <div className="inner-navigate-circle">
              <div className="navigate-icon">
                {" "}
                <FontAwesomeIcon
                  className="Navigation-icon"
                  icon={faAngleRight}
                  color="#7e51e6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Selective_item;
