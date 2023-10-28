import { useState } from 'react';

function HoursPlayed() {
    const [gameHours, SetGameHours] = useState(null);


    function handleChange(e) {
        SetGameHours(e.target.value);
    }

    return (
        <div>
            <label>
                Hours
                <input 
                    type="text" 
                    id="titleText" 
                    placeholder="Hours"
                    value={gameHours}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}

export default HoursPlayed