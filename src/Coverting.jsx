// incorrect 
{/* <h1>Test title</h1>
<svg>
  <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
</svg>
<form>
  <input type="text">
</form> */}
// converting HTML to jsx

function Converting() {
    return (
        <div>
        <h1>Test title</h1>
        <svg>
            <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
        </svg>
        <form>
            <input type="text" />
        </form>
        </div>

    )
};  

// JSX rule
// 1. Return a single root element
// -> either cover the HTML with container or use <></>
// 2. Close all tags 
// -> <input /> or <li></li>
// 3. camelCase Most things
// -> stroke-width : strokeWidth / class : className