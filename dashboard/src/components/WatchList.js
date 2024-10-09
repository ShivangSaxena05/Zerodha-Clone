import React, { useState,useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from '../data/data'
import GeneralContext from "./GeneralContext";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import Doughnutchart from "./Doughnutchart";

const WatchList = () => {
  const labels = watchlist.map((subArray)=>subArray["name"])
  const data = {
    labels,
    datasets:[
      {
        label:"Stock Price",
        data: watchlist.map((stock)=>stock.price),
        backgroundColor:[
          "rgba(255, 0, 0, 0.5)",
          "rgba(0, 255, 0, 0.5)",
          "rgba(0, 0, 255, 0.5)",
          "rgba(255, 255, 0, 0.5)",
          "rgba(128, 0, 128, 0.5)",
          "rgba(255, 165, 0, 0.5)",
          "rgba(255, 125, 15, 0.5)",
          "rgba(0, 0, 0, 0.5)",
          "rgba(128, 128, 128, 0.5)",
          "rgba(0, 128, 0, 0.5)",
      ],
        borderColor:[
          "rgba(255, 0, 0, 0.5)",
          "rgba(0, 255, 0, 0.5)",
          "rgba(0, 0, 255, 0.5)",
          "rgba(255, 255, 0, 0.5)",
          "rgba(128, 0, 128, 0.5)",
          "rgba(255, 165, 0, 0.5)",
          "rgba(255, 125, 15, 0.5)",
          "rgba(0, 0, 0, 0.5)",
          "rgba(128, 128, 128, 0.5)",
          "rgba(0, 128, 0, 0.5)",
      ],
      borderWidth : 1,
      }
    ]
  }

  return (
    <div className="watchList-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchlistItem stock={stock} key={index} />)
          })}
      </ul>
      <Doughnutchart data = {data}/>
    </div>
  );
};

export default WatchList;


const WatchlistItem = ({ stock }) => {
  const [showwatchlistItem, setshowwatchlistItem] = useState(false);
  const handlemouseEnter = (e) => {
    setshowwatchlistItem(true)
  };
  const handlemouseLeave = (e) => {
    setshowwatchlistItem(false)
  };
  return (
    <li onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (<KeyboardArrowUp className="up" />)}
          <span className="price">{stock.price}</span>
          
        </div>
      </div>
      {showwatchlistItem && <WatchListActions uid={stock.name}/>}
    </li>
  );
};


const WatchListActions = ({uid}) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
      generalContext.openBuyWindow(uid);
    };
    return (
      <span className="actions">
        <span>
          <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
            <button className="buy">Buy</button>
          </Tooltip>
          <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
            <button className="sell">Sell</button>
            </Tooltip>
          <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
            <BarChartOutlined className="icon" />
            </button>
            </Tooltip>
          <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
            </button>
            </Tooltip>
        </span>
        
      </span>
    )
}