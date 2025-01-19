import React from "react";
const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>
                you were probably born on {bornYear()}
            </p>
        </div>
    )
}

const Hello2 = () => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p', null, 'You are viewing this on ', now.toString()
        ),
        React.createElement(
            'p', null, 'hello'
        )
    )

}
export {Hello, Hello2};
