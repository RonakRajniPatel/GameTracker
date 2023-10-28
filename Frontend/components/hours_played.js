import { useState } from 'react';

function HoursPlayed() {
    const [gameHours, SetGameHours] = useState(0);

    const handleChange = (e) => {
        SetGameHours(e.target.value);
    }
    return (
        <div>
            <label>
                Name 
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