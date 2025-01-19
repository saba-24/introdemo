/* const CourseName = (params) => {
    return(
        <div>
            <p>
                {params.part} {params.exercises}
            </p>
        </div>
    )
}

const Course = (params) => {
    return(
        <div>
            <CourseName part = {params.part[0]} exercises = {params.exercises[0]}/>
            <CourseName part = {params.part[1]} exercises = {params.exercises[1]}/>
            <CourseName part = {params.part[2]} exercises = {params.exercises[2]}/>
        </div>
    )
}

const Header = (params) => {
    return(
        <div>
            <h1>{params.course}</h1>
        </div>
    )
}

export {Course, Header, CourseName}
*/

import PropTypes from "prop-types";

const course = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
]

const Part = ({a}) => {
    Part.propTypes = {
        a: PropTypes.object,
    }
    return (
        <div>
            <h3> {a.name} </h3>
        <ul>
            {a.parts.map(part => <li key={part.id}> {part.name}  {part.exercises}</li>
            )}
        </ul>
            <p> total of {a.parts.reduce(function (sum, val) {
                    return sum + val.exercises
                }, 0)} exercises </p>
        </div>
            )
}

const Courses = () => {
    return (
        <div>
            {course.map((c) => (<Part a = {c} key={c.id} />))}
        <br/>
        </div>
    )

}
export default Courses;