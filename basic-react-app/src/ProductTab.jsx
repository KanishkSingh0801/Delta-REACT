import Product from "./Product.jsx";
function ProductTab() {
  //let options = ["hi-tech", "waterproof", "portable"];
  let options = [<li>hi-tech</li>, <li>waterproof</li>, <li>portable</li>]
  let options2 = {a: "high-tech", b:"fast"};
  return (
    <div>
      <Product title = "This is a phone" features = {options} features2 = {options2}/>
      <Product title = "This is a laptop" features = {options} features2 = {options2}/>
      <Product title = "This is a fridge"features = {options} features2 = {options2}/>
    </div>
  );
}

export default ProductTab;
