import { useState } from 'react';

function InputGameName() {
    const [gameName, SetGameName] = useState(null);

    function handleChange(e) {
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

export default InputGameName