import React from 'react'

function Hero() {
    return ( <div className="container mb-5">
    <div className="row text-center my-5">
        <h1 className="mt-5">Pricing</h1>
        <span className='fs-5 text-muted pb-5 mb-5'>Free equity investments and flat ₹20 intraday and F&O trades</span>
        <div className='row mt-5 p-5 justify-content-center'>
            <div className='col-4 text-muted' style={{lineHeight:"2.0"}}>
                <img src='media/images/pricing0.svg'  style={{width:"60%"}}/>
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 text text-muted' style={{lineHeight:"2.0"}}>
                <img src='media/images/pricingEquity.svg'   style={{width:"60%"}}/>
                <h2>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 text text-muted' style={{lineHeight:"2.0"}}>
                <img src='media/images/pricingMF.svg' style={{width:"60%"}}/>
                <h2>Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
</div> );
}

export default Hero;