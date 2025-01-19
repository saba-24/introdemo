const CourseName = (params) => {
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