import React, { useEffect, useState } from "react";
import PortfolioList from "../portfoliList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import "./portfolio.scss";
const Portfolio = () => {
  const [select, setSelect] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "content", title: "Content" },
    { id: "design", title: "Design" },
  ];
  useEffect(() => {
    switch (select) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [select]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              id={item.id}
              title={item.title}
              active={select === item.id}
              setSelect={setSelect}
            />
          );
        })}
      </ul>
      <div className="container">
        
          {data.map((e) => {
            return (
              <>
              <div className="item">
                <img src={e.img} alt="" />
                <h3>{e.title}</h3>
                </div>
              </>
            );
          })}
    
      </div>
    </div>
  );
};
export default Portfolio;
