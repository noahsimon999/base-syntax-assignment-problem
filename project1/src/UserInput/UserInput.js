import React from 'react';

function userInput (props) {
    return (
        <form>
            <label>
                Name:
                <input type="text" value={props.currentName} onChange={props.changed}/>
            </label>

        </form>
    )
}

export default userInput;
