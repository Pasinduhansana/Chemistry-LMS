import React from "react";

const Expander_item = ({ item }) => {
  return (
    <>
      <div
        className="expander-item"
        onClick={() => {
          window.open(item.thumbnail, "_blank");
        }}
      >
        <div className="expander-item__column1">
          <div className="expander-item__content__column1">{item.name}</div>
        </div>

        <div className="expander-item__column3">
          <div className="expander-item__content_column3">{item.type}</div>
        </div>
        <div className="expander-item__checkbox">
          <div className="expander-item__content_checkbox">
            <input className="checkbox" type="checkbox"></input>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expander_item;
