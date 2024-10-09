import React from "react";

function Hero() {
    return (
        <div className="container mb-5">
            <div className="row text-center mt-5">
                <img src="media/images/homeHero.png" alt="Hero Image" style={{width:"60"}} className="mx-auto mb-10"/>
                <h1 className="mt-5">Invest in Everything</h1>
                <span className="mt-2">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</span>
                <button className="btn btn-primary p-2 fs-5" style={{width:"20%" , margin:"40px auto"}}>Signup For Free</button>
            </div>
        </div>
    )
}

export default Hero;