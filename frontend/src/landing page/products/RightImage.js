import React from 'react'

function RightImage({ imgURL, ProductTitle, ProductDesc, TryDemo,Trydemotxt,lftarrow}) {
    return ( <>
    <div className='row v-align'>
        <div className='col-4 p-5' style={{marginLeft:"120px",marginTop:"80px"}}>
            <h1>{ProductTitle}</h1>
            <p>{ProductDesc}</p>
            <a href={TryDemo} className='col-5 mb-4'>{Trydemotxt} <i class={lftarrow}></i></a>
        </div>
        <div className='col-7'>
            <img src={imgURL} style={{marginLeft:"100px"}}/>
        </div>
    </div></> );
}

export default RightImage;