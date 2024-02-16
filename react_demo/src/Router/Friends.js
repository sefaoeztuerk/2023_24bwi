import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Friends() {
    const location = useLocation();

    console.log(location.state);
    return (

        <div>
            <h1>Friends</h1>
            <Link to="/">People</Link>

            <div
                onClick={() => {
                    alert("inside");
                }}>
            </div>
        </div>

    );
}