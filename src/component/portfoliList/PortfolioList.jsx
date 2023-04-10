import React from "react";
import "./portfolioList.scss";

const PortfolioList = ({ title, active, setSelect, id }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelect(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
