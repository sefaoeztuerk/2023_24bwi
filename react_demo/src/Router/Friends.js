import React from "react";
import { Link } from "react-router-dom";

export default function Friends() {

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