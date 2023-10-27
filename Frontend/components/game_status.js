import { useState } from 'react';

function GameStatus( { status, selectedValue, setSelectedValue }) {
    return (
    <label>
        {status}
        <input 
            type="radio" 
            name="status" 
            value={status} 
            checked={selectedValue === status}
            onChange={() => setSelectedValue(status)}
        />
    </label>
    );
}

export default function GameStatusSelection() {
    const [selectedValue, setSelectedValue] = useState(null);
    return (
        <div>
            <GameStatus status = "Want to play" selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            <br />
            <GameStatus status = "Are playing" selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            <br />
            <GameStatus status = "Have played" selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            <br />
            <GameStatus status = "Have dropped" selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>      
            <br />
        </div>
    );
}