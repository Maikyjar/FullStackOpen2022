import React from 'react'

const Course = ({course}) => {
    return (
      <div>
        <h1><Header course ={course} /> </h1>
        <>
          {course.parts.map(part => (
            <Content key= {part.id} parts= {part} />
          ))}
        </>
        <b><Total course = {course}/></b>
    </div>
    )
  };
  
  const Header = ({course}) => {
    return (
      <div>
        <p>{course.name}</p>
      </div>
    )
  };
  
  const Content = ({parts}) => {
    return (
      <div>
        <p>{parts.name} {parts.exercises}</p>
      </div>
    )
  }
  
  const Total =({course}) => {
    const total = course.parts
    .map(item => item.exercises)
    .reduce((s, p) => s + p, 0)
    return (
      <div>
        <p>Number of exercises {total}</p>
      </div>
    )
  };



export default Course