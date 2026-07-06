import "./Product.css";

// function Product() {
//     return (
//         <div className="product" >
//             <img src="https://pngimg.com/d/box_PNG50.png"></img>
//             <div className="title-description">
//                 <h2>Product Title</h2>
//                 <p>Product Description</p>
//             </div>
//         </div>
//     )
// }

// Here we are using react props so that for the same component type different value can be used
// Here we are using props as function parameter

function Product({title, price=1}) {
    // if feature array has normal string value then we can use map
    //const listed = features.map((feature) => <li>{feature}</li>);

    //let isDiscount = price > 1000 ? "Discount is 5%" : "";
    // if the price is greater than 1000 then its ok because it will have a new <p> tag
    // but if the price is not greater than 1000 then an empty <p> tag will be there
    // in that case we will not use <p> tag we will directly write the condition 

    // Dynamic Styling
    let isDiscount = price > 1000;
    let styles = {backgroundColor: isDiscount ? "yellow" : "", color: isDiscount ? "black" : "" }; 


    return (
        <div className="product" style={styles}>
        <img src="https://pngimg.com/d/box_PNG50.png"></img>
        <div className="title-description">
            <h2>{title}</h2>
            <p>Price: {price}</p>
            {/* <p>{isDiscount}</p> */}
            {/* {price > 1000 ? <p>Discount is 5%</p> : null} */}
            {isDiscount ? <p>Discount is 5%</p> : <a href="/">Get Discount</a>}
            {/* {price > 1000 && <p>Discount is 5%</p>} */}
        </div>

        </div>
    )
}

export default Product;