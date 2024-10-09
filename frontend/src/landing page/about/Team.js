import React from 'react'

function Team() {
    return (<div className='container'>
        <div className='row mx-auto' style={{ fontSize: "1.1em", width: "80%", lineHeight: "1.6" }}>
        <h2 className='mb-3 text-center'>People</h2>
            <div className='col-5 p-5 text-center'>
                <img src='media/images/Shivang_Saxena.jpg' style={{width:"100%",borderRadius:"100%"}}/>
                <span><p className='mt-4  mx-5 fs-4'>Shivang Saxena</p>
                <p className=' mx-5 text-muted'>Founder, CEO</p>
                </span>
            </div>
            <div className='col-6 fs-6 mt-4 pt-5' style={{lineHeight:"1.8"}}>
                <p>Shivang Saxena, a full-stack web developer, created a ShivaTrades in 2024 to address the challenges he encountered in web development. Using React, Node.js, Express, and MongoDB, the project showcases his expertise in modern web technologies, transforming the landscape of stock trading applications.</p>
<p>He is pursuing B.Tech in Computer Science from GL Bajaj Group Of Institution and currently he is in 3rd year.</p>
<p>Playing Martial Arts is his zen.</p>
<p>Connect on &nbsp; <a href='/' style={{textDecoration:"none"}}>Homepage</a> / <a href='/' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='/' style={{textDecoration:"none"}}>Twitter</a></p>
            </div>
        </div>
    </div>);
}

export default Team;