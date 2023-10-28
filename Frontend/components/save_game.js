import { useState } from 'react';

function AddGame( {gameName, gameHours, gameStatus}) {
    cont [gameName, setGameName] = useState(null);
    function saveGame(gameName, gameHours, gameStatus) {
        
    }

    return (
        <div>
            <button onclick="saveGame()">Add Game</button>
        </div>
    );
}