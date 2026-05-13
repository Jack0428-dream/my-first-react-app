// you want to wrap the completed item's text into another HTML
// like <del> to strike it out
// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {isPacked ? (
//                 <del>
//                     {name + ' ✅'}
//                 </del>
//             ) : (
//                 name
//             )}
//         </li>
//     );
// }

// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

// In React, markup is a part of your code, so you can use tools like 
// variables and functions to tidy up complex expressions.

// Logical AND operator (&&)
// ex 
// return (
//     <li className="item">
//         {name} {isPacked && '✅'}
//     </li>
// );
// -> If "isPacked, then (&&) render the checkmark, otherwise, render nothing"

// in action
// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {name} {isPacked && '✅'}
//         </li>
//     );
// }

// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

// JavaScript && expression returns the value of its right side
// if the left side (our condition) is true
// if it's false,  the whole expression becomes false
// React considers false as a "hole" in the JSX tree, 
// just like null or undefined. 

// Conditionally assigning JSX to a variable
// Try using if statement and a variable
// ex let itemContent = name;
// if (isPacked) {
//   itemContent = name + " ✅";
// }
{/* <li className="item">
    {itemContent}
</li> */}

// in action
// function Item({ name, isPacked }) {
//     let itemContent = name;
//     if (isPacked) {
//         itemContent = name + " ✅";
//     }
//     return (
//         <li className="item">
//             {itemContent}
//         </li>
//     );
// }

// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

// this works for arbitrary JSX too.
function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✅"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}