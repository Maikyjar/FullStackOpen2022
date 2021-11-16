import React from 'react'

const Filter = ({persons, showAll}) => {
    return (
        persons.filter((val) =>{
            if (showAll == "") {
            return val
            } else if (val.name.toLowerCase().includes(showAll.toLowerCase())){
            return val
            }
          }).map(user => (
            <li key= {user.name}>{user.name} {user.number}</li>
        ))
    )
}

export default Filter

