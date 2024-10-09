import { useEffect, useState } from 'react';
import React from "react";
import axios from 'axios'
import VerticalGraph from './VerticalGraph';
// import {holdings} from '../data/data'

const Holdings = () => {

  const [allHoldings, setallHoldings] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setallHoldings(res.data)
    })
  }, [])
  const labels = allHoldings.map((subArray)=>subArray["name"])
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(128, 0, 128, 0.5)",
      },
    ]
  }



  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curvalue = stock.price * stock.qty
            const isProfit = curvalue - stock.avg * stock.qty >= 0.0
            const profClass = isProfit ? "profit" : "loss"
            const dayChange = stock.isLoss ? "loss" : "profit"
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curvalue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curvalue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayChange}>{stock.day}</td>
              </tr>
            )

          })}

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;