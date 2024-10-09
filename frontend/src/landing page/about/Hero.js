import React from 'react'

function Hero() {
    return ( <div className='container py-5'>
    <h1 className='fs-2 mx-auto my-5 text-muted' style={{width:"60%"}}>We pioneered the discount broking model in India. Now, we are breaking ground with our technology.</h1>
<div className='row border-top mx-auto py-5' style={{fontSize:"1.1em",width:"80%", lineHeight:"1.6"}}>
<div className='col-6 p-5'>
    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company ShivaTrades, a combination of Zero and "Rodha", the Sanskrit word for barrier.<br/>
    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.<br/>
    Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
</div>
<div className='col-6 p-5'>
    <span>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</span><br/>
    <span><a href='' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</span><br/>
    <span>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='' style={{textDecoration:"none"}}>blog</a> or see what the media is <a href='' style={{textDecoration:"none"}}>saying about us.</a></span>
</div>
</div>
</div> );
}

export default Hero;