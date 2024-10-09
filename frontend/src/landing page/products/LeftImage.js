import React from 'react'

function LeftImage({ imgURL, ProductTitle, ProductDesc, TryDemo,Trydemotxt, LearnMore,LearnMoretxt,lftarrow, rtarrow, GooglePlay, AppStore }) {
    return (<>
    <div className='row v-align between m-5'>
        <div className='col-7 mb-5 text-center'>
            <img src={imgURL}/>
        </div>
        <div className='col-4 mt-5'>
            <h1>{ProductTitle}</h1>
            <p>{ProductDesc}</p>
            <div className='row'>
                    <a href={TryDemo} className='col-5 mb-4'>{Trydemotxt} <i class={lftarrow}></i></a>
                    <a href={LearnMore} className='col-6 mb-4'>{LearnMoretxt} <i class={rtarrow}></i></a><br/>
            </div>
            <div className='image'>
                    <a href={GooglePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={GooglePlay} className='mx-5'><img src='media/images/appstoreBadge.svg'/></a>
            </div>
        </div>
    </div>
    </>);
}

export default LeftImage;