import React, { useState, useEffect } from 'react';
import Table from './Table';


const Main = ({ tableData, }) => {
    return (
        <div className="main">
            <Table tableData={tableData} />

        </div>
    );
}

export default Main;
