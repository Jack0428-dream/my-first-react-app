// Rendering a list of elements in JSX
// function App3() {
//     return (
//         <div>
//             <h1>Animals: </h1>
//             <ul>
//                 <li>Lion</li>
//                 <li>Cow</li>
//                 <li>Snake</li>
//                 <li>Lizard</li>
//             </ul>
//         </div>
//     );
// }
// this can be tedious and long

// instead of that 
// we can embed expressions inside JSX with curly braces
// function App3() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div>
//             <h1>Animals: </h1>
//             <ul>
//                 {animals.map((animla) => {
//                     return <li key={animal}>{animal}</li>
//                 })}
//             </ul>
//         </div>
//     );
// }

// identical code for the above one
// function App3() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];
//     const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

//     return (
//         <div>
//             <h1>Animals: </h1>
//             <ul>
//                 {animalsList}
//             </ul>
//         </div>
//     );
// }

// Rendering a list of components in JSX
// function ListItem(props) {
//     return <li>{props.animal}</li>
// }

// function List(props) {
//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 return <ListItem key={animal} animal={animal} />;
//             })}
//         </ul>
//     );
// }

// function App3() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div>
//             <h1>Aniamls: </h1>
//             <List animals={animals} />
//         </div>
//     );
// }

// "Missing in props validation"
// a default ESLint rule warning about prop types,
// something that will be covered later in the course

// to turn off this rule by adding the following to your
// eslint.config.js file 
// rule: {
//     // Your other rules
//     "react/prop-types": "off"
// }

// Conditionally rendering UI
// What if we only want to render an animal that starts with the letter L?

// Using the ternary operator
// One way to conditionally render an element is with a ternary operator
// using a boolean value to decide what to render
// function List(props) {
//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//             })}
//         </ul>
//     );
// }

// Using "String method startsWith" to check if the animal
// starts with the letter L => This method either returns true or false.

// function App3() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div>
//             <h1>Animals: </h1>
//             <List animals={animals} />
//         </div>
//     );
// }

export default App3

// Using the && operator
// function List(props) {
//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 return animal.startsWith("L") && <li key={animal}>{animal}</li>; 
//             })}
//         </ul>
//     );
// }
// Pitfall
// Don't put numbers on the left side of &&
// make the left side a boolean 
//ex messageCount -> 'messageCount > 0 && <p>New messages</p>'

// function App3() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard", "Leopard"];

//     return (
//         <div>
//             <h1>Animals: </h1>
//             <List animals={animals} />
//         </div>
//     );
// }

// Other ways to render conditionally 
// Using if, if/else, switch

// ex) 1. Check if the animals property is provided & 2. Check if the animals length is greater than 0
// function List(props) {
//     if (!props.animals) {
//         return <div>Loading...</div>;
//     }

//     if (props.animals.length === 0) {
//         return <div>There are no animals in the list!</div>;
//     }

//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 return <li key={animal}>{animal}</li>;
//             })}
//         </ul>
//     );
// }

// function App3() {
//     const animals = [];

//     return (
//         <div>
//             <h1>Animals: </h1>
//             <List animals={animals} />
//         </div>
//     );
// }

// Of cours, it can be accomplished with just the ternary and && operators
// function List(props) {
//     return (
//         <>
//             {!props.animals ? (
//                 <div>Loading...</div>
//             ) : props.animals.length > 0 ? (
//                 <ul>
//                     {props.animals.map((animal) => {
//                         return <li key={animal}>{animal}</li>;
//                     })}
//                 </ul>
//             ) : (
//                 <div>There are no animals in the list!</div>
//             )}
//         </>
//     );
// }

// or
function List(props) {
    return (
        <>
            {!props.animals && <div>Loading...</div>}
            {props.animals && props.animals.length > 0 && (
                <ul>
                    {props.animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })}
                </ul>
            )}
            {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
        </>
    );
}

function App3() {
    const animals = [];

    return (
        <div>
            <h1>Animals: </h1>
            <List />
        </div>
    );
}
