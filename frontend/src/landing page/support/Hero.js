import React from 'react'

function Hero() {
    return (
    <div className='container-fluid text-white bg-primary'>
        <div className='container'>
            <div id='wrapper'>
                <h5>Support Portal</h5>
                <a href='' style={{color:"white" }}>Track tickets</a>
            </div>
            <div className='row p-5 mx-3'>
                <div className='col-6 mx-3'>
                    <h4 className='mb-5'>Search for an answer or browse help topics to create a ticket</h4>
                    <input type='text' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' style={{width:"100%",borderRadius:"10px",padding:"15px 15px"}}></input>

                    <a href='' style={{textDecoration:"none",color:"white", lineHeight:"1.8",marginLeft:"10px"}}>Track account opening</a>
                    <a href='' style={{textDecoration:"none",color:"white", lineHeight:"1.8",marginLeft:"10px"}}>Track segment activation</a>
                    <a href='' style={{textDecoration:"none",color:"white", lineHeight:"1.8",marginLeft:"10px"}}>Intraday margins</a><br/>
                    <a href='' style={{textDecoration:"none",color:"white", lineHeight:"1.8",marginLeft:"10px"}}>Kite user manual</a>
                </div>
                <div className='col-5'>
                    <h4 className='mb-5'>Featured</h4>
                    <ol>
                        <li><a href='' style={{textDecoration:"none",color:"white"}}>Offer for sale (OFS) - September 2024</a></li>
                        <li><a href=''style={{textDecoration:"none",color:"white"}}>Latest Intraday leverages and Square-off timings</a></li>
                    </ol>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero;