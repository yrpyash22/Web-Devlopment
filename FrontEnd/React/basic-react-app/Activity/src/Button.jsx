function handleClick(event) {
    console.log("Hello");
    console.log(event);
}

function handleMouseOver() {
    console.log("BYE BYE");
}

function handleDoubleClick() {
    console.log("Double Click");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}> Click Me</button>
            <p onClick={handleClick}>This para is for event Demo</p>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vero suscipit officiis quaerat sequi consectetur voluptatibus 
                nulla ab assumenda qui cumque,
                 eveniet id perspiciatis magnam doloremque earum 
                 consequuntur ut nam commodi!</p>
            <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
        </div>
    )
}