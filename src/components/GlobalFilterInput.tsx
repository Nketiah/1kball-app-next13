"use client";

import React from "react";

type PropTypes = {
  filter: string;
  setFilter: (val: string) => void;
};

const GlobalFilterInput = ({ filter, setFilter }: PropTypes) => {
  return (
    <>
      <div style={{ textAlign: "center", margin: "0.5rem" }}>
        Search: {"  "}
        <input
          type="text"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </>
  );
};

export default GlobalFilterInput;
