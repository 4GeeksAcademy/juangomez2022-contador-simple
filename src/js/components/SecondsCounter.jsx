// Home.js
import React from "react";

const SecondsCounter = (props) => {

    const six = Math.floor(props.seconds / 100000);
    const five = Math.floor(props.seconds / 10000) % 10;
    const four = Math.floor(props.seconds / 1000) % 10;
    const three = Math.floor(props.seconds / 100) % 10;
    const two = Math.floor(props.seconds / 10) % 10;
    const one = Math.floor(props.seconds / 1) % 10;

    return (
        <div className="text-center mt-5 ">
            <div className="d-flex bg-black text-white p-4  fs-5 justify-content-center w-50 mx-auto ">
                <div className="counter-box">
                    <i className="fa-solid fa-clock"></i>
                </div>
                <div className="counter-box">{six}</div>
                <div className="counter-box">{five}</div>
                <div className="counter-box">{four}</div>
                <div className="counter-box">{three}</div>
                <div className="counter-box">{two}</div>
                <div className="counter-box">{one}</div>
            </div>
        </div>
    );
};

export default SecondsCounter;