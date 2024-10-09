import React from 'react'

function CreateTicket() {
    return ( <div className='container p-5'>
        <h3>To create a ticket, select a relevant topic</h3>
        <div className='row mt-5'>
            <div className='col-4'>
                <p className='fs-5'> <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Oppening</p>
                <ul style={{listStyle:"none",lineHeight:"2"}}>
                    <li ><a href='' style={{textDecoration:"none"}}>Getting started</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Online</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Offline</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Charges</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Company, Partnership and HUF</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a></li>
                </ul>
            </div>
            <div className='col-4'>
                <p className='fs-5'><i class="fa fa-user-o" aria-hidden="true"></i> Your ShivaTrades Account</p>
                <ul style={{listStyle:"none",lineHeight:"2"}}>
                    <li ><a href='' style={{textDecoration:"none"}}>Login credentials</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Your Profile</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Account Information</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>CMR & DP ID</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Nomination</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Transfer and conversion of shares</a></li>
                </ul>
            </div>
            <div className='col-4'>
                <p className='fs-5'> <i class="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets</p>
                <ul style={{listStyle:"none",lineHeight:"2"}}>
                    <li ><a href='' style={{textDecoration:"none"}}>Trading FAQs</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Kite</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Margins</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Product and order types</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Corporate actions</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Kite features</a></li>
                </ul>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-4'>
                <p className='fs-5'><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</p>
                <ul style={{listStyle:"none",lineHeight:"2"}}>
                    <li ><a href='' style={{textDecoration:"none"}}>Fund withdrawal</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Adding Funds</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Adding bank accounts</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>eMandates</a></li>
                </ul>
            </div>
            <div className='col-4'>
                <p className='fs-5'><i class="fa fa-check-circle-o" aria-hidden="true"></i> Console</p>
                <ul style={{listStyle:"none",lineHeight:"2"}}>
                    <li ><a href='' style={{textDecoration:"none"}}>IPO</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Portfolio</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Funds statement</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Profile</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Reports</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Referral program</a></li>
                </ul>
            </div>
            <div className='col-4'>
                <p className='fs-5'><i class="fa fa-circle-thin" aria-hidden="true"></i> Coin</p>
                <ul style={{listStyle:"none",lineHeight:"2"}}>
                    <li ><a href='' style={{textDecoration:"none"}}>Understanding mutual funds and Coin</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Coin app</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Coin web</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>Transaction and reports</a></li>
                    <li ><a href='' style={{textDecoration:"none"}}>National Pension Scheme (NPS) </a></li>
                </ul>
            </div>
        </div>
    </div> );
}

export default CreateTicket;