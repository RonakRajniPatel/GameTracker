import React from 'react';
import GameStatusSelection from '../components/game_status';
import InputGameName from '../components/game_name';

export default function HomePage() {

    return (
        <div>
            <InputGameName />
            <GameStatusSelection />
        </div>
        
    );
}