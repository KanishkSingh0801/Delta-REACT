import Product from "./Product.jsx";
function ProductTab() {
  //let options = ["hi-tech", "waterproof", "portable"];
  // let options = [<li>hi-tech</li>, <li>waterproof</li>, <li>portable</li>]
  // let options2 = {a: "high-tech", b:"fast"};
  let styles = {
    display : "flex",
    flexWrap : 'wrap',
    justifyContent : "center",
    alignItems : "center"
  };
  return (
    <div style = {styles}>
      
      <Product title = "Logitech MX master" idx = {0}/>
      <Product title = "Apple pencil Gen2" idx = {1}/>
      <Product title = "Zebronics zeb transfer" idx = {2}/>
      <Product title = "Logitech K380" idx = {3}/>
    </div>
  );
}

export default ProductTab;
