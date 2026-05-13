// function Button() {
//     return (
//         <button>Click Me!</button>
//     );
// }

// reusable button that we can use as many times as we like

// export default function App2() {
//     return (
//         <div>
//             <Button />
//             <Button />
//             <Button />
//         </div>
//     );
// }

// manual changing

// function Button2() {
//     return (
//         <button>Don't Click Me!</button>
//     );
// }

// export default function App2() {
//     return (
//         <div>
//             <Button />
//             <Button2 />
//             <Button />
//         </div>
//     )
// }

// using props(properties) to account for any number of variations 
// with a single button component

// function Button(props) {
//     const buttonStyle = {
//         color: props.color,
//         fontSize: props.fontSize + 'px'
//     };

//     return (
//         <button style={buttonStyle}>{props.text}</button>
//     );
// }

// export default function App2() {
//     return (
//         <div>
//             <Button text="Click Me!" color="blue" fontSize={12} />
//             <Button text="Don't Click Me!" color="red" fontSize={12} />
//             <Button text="Click Me!" color="blue" fontSize={20} />
//         </div>
//     )
// }

//Prop destructuring
// function Button ({ text, color, fontSize }) {
//     const buttonStyle = {
//         color: color,
//         fontSize: fontSize + "px"
//     };

//     return <button style={buttonStyle}>{text}</button>;
// }

// export default function App2() {
//     return (
//         <div>
//             <Button text="Click Me!" color="blue" fontSize={12} />
//             <Button text="Don't Click Me!" color="red" fontSize={12} />
//             <Button text="Click Me!" color="blue" fontSize={20} />
//         </div>
//     );
// }

// Default props 
// function Button ({ text = "Click Me!", color = "blue", fontSize = 12 }) {
//     const buttonStyle = {
//         color: color,
//         fontSize: fontSize + "px"
//     };

//     return <button style={buttonStyle}>{text}</button>;
// }

// export default function App2() {
//     return (
//         <div>
//             <Button />
//             <Button text="Don't Click Me!" color="red" />
//             <Button fontSize={20} />
//         </div>
//     );
// }

// defaultProps : traditionally used to set defautl values for props
// particularly in class components 

// function Button ({ text, color, fontSize }) {
//     const buttonStyle = {
//         color: color,
//         fontSize: fontSize + "px"
//     };

//     return <button style={buttonStyle}>{text}</button>;
// }

// Button.defaultProps = {
//     text: "Click Me!",
//     color: "blue",
//     fontSize: 12
// };

// export default function App2() {
//     return (
//         <div>
//             <Button text="Click Me!"/>
//             <Button text="Don't Click Me!" color="red" />
//             <Button text="Click Me!" fontSize={20} />
//         </div>
//     );
// }

// function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
//     const buttonStyle = {
//         color: color,
//         fontSize: fontSize + "px"
//     };

//     return (
//         <button onClick={handleClick} style={buttonStyle}>{text}</button>
//     );
// }

// export default function App2() {
//     const handleButtonClick = () => {
//         window.location.href = "https://www.google.com";
//     };

//     return (
//         <div>
//             <Button handleClick={handleButtonClick}/>
//         </div>
//     )
// }

// to customize this functionality
function Button ({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    );
}

export default function App2() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    };

    return (
        <div>
            <Button handleClick={() => handleButtonClick('http://www.theodinproject.com')} />
        </div>
    );
}