import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Category_card = ({ content, img_url }) => {
  return (
    <>
      <div className="category-item-content">
        <div className="category-rounded-rectangle">
          <div className="selection-dot"></div>
          <div className="image-circle">
            <img className="category-img" src={img_url} alt={content} />
          </div>
          <div className="text-field">{content}</div>
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
export default Category_card;
