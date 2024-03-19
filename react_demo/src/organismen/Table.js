import React from 'react';
import TableHeader from '../molecules/TableHeader';
import TableRow from '../molecules/TableRow';

const Table = ({ tableData }) => {
    return (
        <div className="table">
            <TableHeader />
            {tableData.map((data, index) => (
                <TableRow key={index} data={data} index={index} />
            ))}
        </div>
    );
}



export default Table;
