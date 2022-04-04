import React from 'react'

const Filter = ({persons, showAll, personDelete}) => {
    
    return (
        persons
            .filter(val => val.name.toLowerCase().includes(showAll.toLowerCase()))
            //return <div>name not found</div>
            .map(user => {
                return (
                    <li key= {user.id}>
                        {user.name} {user.number} <button type="delete" onClick={() => personDelete(user.id, user.name)}>Delete</button>
                    </li>
                )
          })
    )
}

export default Filter

