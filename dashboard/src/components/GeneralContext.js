import React,{useState} from "react";
import BuyAction from "./BuyAction";


const GeneralContext = React.createContext({
    openBuyWindow : (uid) =>{},
    closeBuyWindow: ()=>{},
})


export const GeneralContextProvider = (props)=>{
    const [isBuyopen,setisBuyopen] = useState(false)
    const [selectStockid, setselectStockid] = useState("")
    
    const handleopenBuy = (uid) =>{
        setisBuyopen(true)
        setselectStockid(uid)
    }
    
    
    const handlecloseBuy = () =>{
        setisBuyopen(false)
        setselectStockid("")
    }

    return (
        <GeneralContext.Provider value={{
            openBuyWindow:handleopenBuy,
            closeBuyWindow: handlecloseBuy,
        }}>
            {props.children}
            {isBuyopen && <BuyAction uid={selectStockid}/>}
        </GeneralContext.Provider>
    )
}
export default GeneralContext;