import { useState } from 'react';

export default function InputGameName() {
    const [gameName, SetGameName] = useState(null);

    const handleChange = (e) => {
        SetGameName(e.target.value);
    }
    return (
        <div>
            <label>
                Name 
                <input 
                    type="text" 
                    id="titleText" 
                    placeholder="Game"
                    value={gameName}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}