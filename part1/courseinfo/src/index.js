import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>{props.location1} {props.point1}</p>
      <p>{props.location2} {props.point2}</p>
      <p>{props.location3} {props.point3}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part location1 = {props.part1} point1 ={props.exercises1} />
      <Part location2 = {props.part2} point2 ={props.exercises2} />
      <Part location3 = {props.part3} point3 ={props.exercises3} />
    </div>
  ) 
};

const Total =({parts}) => {
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
};

const App = () => {
  const course = {
    name: "Half Stack applicaction development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      },
    ]
  };    
 
  return(
  <div>
    <Header course ={course.name} />
    <Content part1 = {course.parts[0].name} exercises1 = {course.parts[0].exercises} />
    <Content part2 = {course.parts[1].name} exercises2 = {course.parts[1].exercises} />
    <Content part3 = {course.parts[2].name} exercises3 = {course.parts[2].exercises} />
    <Total parts ={course.parts}/>
  </div>
  )
};
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

