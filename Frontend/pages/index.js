import React from 'react';
import { useState } from 'react';
import { GameStatusSelection, InputGameName, HoursPlayed, AddGame } from '../components';

export default function HomePage() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [gameName, SetGameName] = useState(null);
    const [gameHours, SetGameHours] = useState(null);

    return (
        <div>
            <InputGameName gameName={gameName} SetGameName={SetGameName}/>
            <GameStatusSelection selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            <HoursPlayed gameHours={gameHours} SetGameHours={SetGameHours}/>
            {/* <AddGame /> */}
        </div>
        
    );
}