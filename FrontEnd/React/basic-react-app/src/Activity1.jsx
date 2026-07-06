
function Activity1({userName, textColor}) {
    let styles = {color: textColor != "" ? textColor : ""}
    return (
        <div>
            <h1 style={styles}> Hello { " " + userName}</h1>
        </div>
    )
}

export default Activity1