import "./Product.css";

function Product({ title, price, features, features2 }) {
  console.log(features);
  const list = features.map((feature) => <li>{feature}</li>); //Map method used with variable
  let styles = {backgroundColor : "blue"}; //CSS attribute is written in camel case
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <p>This is my product description</p>
      <p>{features}</p>
      <p>{features2.a}</p>
      <p>{features2.b}</p>
      {/* <p>
        {features.map((feature) => ( //Map method used directly
          <li>{feature}</li>
        ))}
      </p> */}
      {/* <p>{price > 30000 ? "Discount of 5%" : "No discount"}</p>  */} 
    </div>
  );
}

export default Product;