import React from 'react'

const Add = ({addName, newName, handleNoteChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={addName}>
            <div>
                name: <input 
                value = {newName} 
                onChange={handleNoteChange}/>
            </div>
            <div>
                number: <input 
                value = {newNumber}
                onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Add