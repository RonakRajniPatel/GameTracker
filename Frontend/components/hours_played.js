function HoursPlayed({gameHours, SetGameHours}) {

    return (
        <div>
            <label>
                Hours
                <input 
                    type="text" 
                    id="titleText" 
                    placeholder="Hours"
                    onChange={(e) => {SetGameHours(e.target.value)}}
                />
            </label>
        </div>
    );
}

export default HoursPlayed