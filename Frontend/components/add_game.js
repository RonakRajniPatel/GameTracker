import { useState } from 'react';

class Game {
    constructor(title, status, hours) {
        this.title = title;
        this.status = status;
        this.hours = hours;
    }
    static fromJSON(json) {
        return new Game(json.title, json.status, json.hours);
    }

    static toString() {
        return `Title: ${this.title}, Status: ${this.status}, Hours: ${this.hours}`;
    }
}

function AddGame( {gameName, gameStatus, ...gameStats}) {
    fetch('http://localhost:8080/save/game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return (
        <div>
            <button onclick="saveGame()">Add Game</button>
        </div>
    );
}

export default AddGame