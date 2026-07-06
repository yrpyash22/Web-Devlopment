function handleSubmitForm(event) {
    event.preventDefault();
    console.log("Form was Submitted");
    console.log(event)
    // if we use onclick with this - then it will persist only for short period of time in console
    // so to remove this we use
    // event.preventDefault();
}

export default function Form() {
    return (
        <form onSubmit={handleSubmitForm}>
            <input placeholder="Write Something"></input>
            <br></br>
            <button>Submit</button>
        </form>
    )
}