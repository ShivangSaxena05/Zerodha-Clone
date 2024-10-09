import React from "react";

function Education() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-6">
                <img src="media/images/education.svg" style={{width:"80%"}}/>
            </div>
            <div className="col-6 mt-5">
                <h1 className="fs-2">Free and open market education</h1>
                <p className="mt-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced training</p>
                <a href="">Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                <a href="">TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    )
}

export default Education;