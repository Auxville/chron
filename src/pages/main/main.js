import React from "react";
import Header from "../main/screens/header/header.js";
import Intro from "../main/screens/intro/intro.js";


function mainPage (){
    return (
        <div className="Container">
            <Header />, <Intro />
        </div>
    )
}

export default mainPage;