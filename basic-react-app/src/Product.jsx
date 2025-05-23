import "./Product.css";

function Product({title, features, features2}) {
    console.log(features);
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>This is my product description</p>
            <p>{features}</p>
            <p>{features2.a}</p>
            <p>{features2.b}</p>
        </div>
    )
}

export default Product;