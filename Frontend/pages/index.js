import React from 'react';
import { GameStatusSelection, InputGameName, HoursPlayed } from '../components';

export default function HomePage() {

    return (
        <div>
            <InputGameName />
            <GameStatusSelection />
            <hours_played/>
        </div>
        
    );
}