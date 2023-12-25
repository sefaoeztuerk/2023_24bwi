import React from 'react'
import Card from './Card'

export default function Weihnachten() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Der Weihnachtsmann wünscht euch frohe Weihnachten !!!</h1>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Card ImageUri="https://img.freepik.com/vektoren-kostenlos/weihnachtsmann-mit-gruener-tasche-illustration-isoliert_18591-83129.jpg" />
                <h2>Grantelbart wünscht euch keine frohe Weihnachten !!!</h2>
                <Card ImageUri="https://pbs.twimg.com/media/EAQQ_LqXYAA0jqB.jpg" />



            </div>
        </div>

    );
};

