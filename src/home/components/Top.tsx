import React from "react";
import "../css/Top.css";
import { Link } from "react-router-dom";


const Top = () => {

    return (
        <div className='top-wrapper'>
            <div className='center'>
                <h1 className='Kijima'>Kijima Riku</h1>
                <p className='portforio'>-PORTFORIO-</p>
                <Link to="/home"><button className="next bg-blue-500 hover:bg-blue-700 text-white  py-1 px-3 rounded-full">Click</button></Link>
            </div>
        </div>
    )
};

export default Top;