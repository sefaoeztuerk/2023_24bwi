import React from 'react'
import UpGamesHeader from '../molecules/UpGamesHeader'
import UpGameTable from '../molecules/UpGameTable'

export default function UpGames() {
    return (
        <div className='p-8 '>
            <UpGamesHeader />
            <UpGameTable />
        </div>
    )
}
