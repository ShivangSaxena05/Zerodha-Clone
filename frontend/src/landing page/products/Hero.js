import React from 'react'

function Hero() {
    return ( 
        <div className="container mb-5">
            <div className="row text-center mt-5">
                <h1 className="mt-5">Technology</h1>
                <span className='fs-5 text-muted'>Sleek, modern, and intuitive trading platforms</span>
                <span className='fs-5 text-muted'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></span>
            </div>
        </div>
     );
}

export default Hero;