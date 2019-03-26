import React from "react";
import PropTypes from "prop-types";

const scrollbarHeight = "16px";

const Shelf = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "hidden"
      }}
    >
      <div
        style={{
          overflowX: "auto",
          "-webkit-overflow-scrolling": "touch",
          position: "relative",
          whiteSpace: "nowrap",
          marginBottom: `-${scrollbarHeight}`
        }}
      >
        <div
          style={{
            display: "inline-block",
            paddingBottom: scrollbarHeight
          }}
        >
          <div style={{ display: "flex" }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  children: PropTypes.node.isRequired
};

export default Shelf;
