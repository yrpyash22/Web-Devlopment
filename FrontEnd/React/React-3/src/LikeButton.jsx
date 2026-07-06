import "./LikeButton.css"
import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [click, setClick] = useState(0);
    let toggleLike = () => {
        setIsLiked(!isLiked);
        console.log(isLiked);
        setClick(click+1);
    }
    let likeStyle = {color:"red"};
    return (
        <div>
            <p>Clicks are {click}</p>
            <button onClick={toggleLike}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>
                }
            </button>
        </div>
    )
}