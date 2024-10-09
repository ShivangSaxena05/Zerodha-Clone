import React from 'react'

function Universe() {
    return ( <>
    <div className='row text-center justify-content-center'>
        <h1 className='m-5 pt-5'>The ShivaTrades Universe</h1>
        <span>Extend your trading and investment experience even further with our partner platforms</span>
        <div className='col-2 m-5'>
            <img className='' src='media/images/ShivaTradesFundhouse.png' style={{width:"70%", height:"15%"}}/>
            <p className='mb-5 text-muted' style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            <img src='media/images/streakLogo.png' style={{width:"70%", height:"15%"}}/>
            <p className='text-muted' style={{fontSize:"13px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className='col-2 m-5'>
            <img className='' src='media/images/sensibullLogo.svg' style={{width:"70%", height:"15%"}}/>
            <p className='mb-5 text-muted' style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            <img src='media/images/smallcaseLogo.png' style={{width:"70%", height:"15%"}}/>
            <p className='text-muted' style={{fontSize:"13px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className='col-2 m-5'>
            <img className='' src='media/images/tijori.svg' style={{width:"70%", height:"15%"}}/>
            <p className='mb-5 text-muted' style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            <img src='media/images/dittoLogo.png' style={{width:"70%", height:"15%"}}/>
            <p className='text-muted' style={{fontSize:"13px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
    </div>
        <button className="btn btn-primary fs-5" style={{width:"15%", marginLeft:"42%"}}>Signup For Free</button>
    </> );
}

export default Universe;