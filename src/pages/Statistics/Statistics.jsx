import React, { useEffect } from "react";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics";
  }, []);
  return (
    <div>
      <h1>Statistics</h1>
    </div>
  );
};

export default Statistics;
