import "./Amazoncard.css"
export default function Amazoncard({imgSrc, title="", description="", oldPrice="", newPrice=""}) {
    return (
        <>  
            <main className="main">
                <div className="box">
                    <h2 className="cardHead">{title}</h2>
                    <img className="cardImg" src= {imgSrc}></img>
                    <h3 className="cardDesc">{description.map((desc) => (<li>{desc}</li>))}</h3>
                    <div className="cardPrices">
                        <h3 className="oldPrice"><sup><span>&#8377;</span></sup>{oldPrice}</h3>
                        <h3 className="newPrice"><sup><span>&#8377;</span></sup>{newPrice}</h3>
                </div>
                </div>
                
            </main>
        </>
    )
}