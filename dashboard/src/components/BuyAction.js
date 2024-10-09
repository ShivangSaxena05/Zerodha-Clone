import { Link, containerClasses } from "@mui/material";
import React, {useContext, useState} from "react";
import "./BuyAction2.css"
import axios from 'axios'
import GeneralContext from "./GeneralContext";



function BuyAction({uid}){
    const [stockQty, setstockQty]=useState(1)
    const [stockPrice, setstockPrice] = useState(0.0)
    const handleBuyclick = async() => {
        await axios.post('http://localhost:3002/newOrder', {
            name: uid,
            qty: stockQty,
            price: stockPrice,
            mode: "Buy",
        })
        generalContext.closeBuyWindow()
    }

    const generalContext = useContext(GeneralContext);
    const handleCancel = ()=>{
        generalContext.closeBuyWindow()
    }
    return (
        <div className="containerClass" draggable="true">
            <div className="regular-order">
                <div className="input">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty" onChange={(e)=>setstockQty(e.target.value)} value={stockQty}/>
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" id="price" step="0.5" onChange={(e)=>setstockPrice(e.target.value)} value={stockPrice}/>
                    </fieldset>
                </div>
            </div>
                    <div className="buttons">
                        <span>Margin required $124.65</span>
                        <div>
                            <Link to="" className="Link" onClick={handleBuyclick}>Buy</Link>
                            <Link to="" className="Link" onClick={handleCancel}>Cancel</Link>
                        </div>
                    </div>
        </div>
    )
}

export default BuyAction