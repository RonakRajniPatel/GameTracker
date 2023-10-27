import React from 'react';
import GameStatusSelection from '../components/game_status';

export default function HomePage() {

    const [status, setStatus] = React.useState();
    return (
        <div>
            <GameStatusSelection />
        </div>
        
    );
}