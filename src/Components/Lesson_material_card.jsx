import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";

const lesson_material_card = ({ item }) => {
  return (
    <>
      <div className="Material-item">
        <div className="Material-item__column1">
          <div className="Material-item__content__column1">{item.name}</div>
        </div>

        <div className="Material-item__column2">
          <div className="Material-item__content_column2">{item.type}</div>
        </div>

        <button
          className="Material-item__view-btn"
          onClick={() => {
            window.open(item.link, "_blank");
          }}
        >
          <FontAwesomeIcon icon={faEye} color="#4646af" />
        </button>

        <button
          className="Material-item__download-btn"
          onClick={() => {
            const link = document.createElement("a");
            link.href = item.link;
            link.setAttribute("download", item.link.split("/").pop()); // Ensure download attribute is set
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <FontAwesomeIcon icon={faDownload} color="#4646af" />
        </button>
      </div>
    </>
  );
};
export default lesson_material_card;
