import Product from "./Product.jsx";
function ProductTab() {
  let features = ["hi-tech", "waterproof", "portable"];
  let options2 = {a: "high-tech", b:"fast"};
  return (
    <div>
      <Product title = "This is a phone" features = {features} features2 = {options2}/>
      <Product title = "This is a laptop" />
      <Product title = "This is a fridge"/>
    </div>
  );
}

export default ProductTab;
