"use client";

import React from "react";

type PropTypes = {
  column: any;
};

const ColumnFilter = ({ column }: PropTypes) => {
  const { filterValue, setFilter } = column;

  return (
    <>
      <div style={{ textAlign: "center", margin: "0.5rem" }}>
        Search: {"  "}
        <input
          type="text"
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </>
  );
};

export default ColumnFilter;
