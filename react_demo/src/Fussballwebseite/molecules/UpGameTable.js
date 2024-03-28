import React from 'react'
import UpGameContainer from '../atoms/UpGameContainer'

export default function UpGameTable() {
    return (
        <div className='grid grid-cols-4 space-x-4 w-4/5 bg-gray-400 p-4 rounded-b-xl'>
            <UpGameContainer />
            <UpGameContainer />
        </div>
    )
}
