// import some liberally from react
import React from 'react'


// function Greet() {
//     return <h1>Hello React tutorial from components!</h1>;
// }

// This is ES6 librally
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.name} | {props.heroName}</h1>
            <p>{props.children}</p>
        </div>
    );
}

export default Greet;