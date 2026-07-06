import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) =>  {
            return {...currData, [event.target.name]: event.target.value};
        })
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    }
    return (
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" type="text" 
                value={formData.username} 
                onChange={handleInputChange}
                id="username"
                name="username"></input>
                <br></br>
                <br></br>
                <label htmlFor="remarks">Remarks</label>
                <textarea value={formData.remarks} 
                onChange={handleInputChange}
                placeholder="Enter remarks"
                id="remarks"
                name="remarks">Remarks</textarea>
                <br></br>
                <br></br>
                <label htmlFor="rating">Ratings</label>
                <input placeholder="ratings" type="number" min={1} max={5} 
                value={formData.rating} 
                onChange={handleInputChange}
                id="rating"
                name="rating"></input>
                <br></br>
                <br></br>
                <button >Add Comment</button>
            </form>
        </div>
    )
}