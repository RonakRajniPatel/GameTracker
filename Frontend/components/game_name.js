import { useState } from 'react';

function InputGameName({gameName, SetGameName}) {


    return (
        <div>
            <label>
                Name
                <input 
                    type="text" 
                    id="titleText" 
                    placeholder="Game"
                    onChange={(e) => SetGameName(e.target.value)}
                />
            </label>
        </div>
    );
}

export default InputGameName