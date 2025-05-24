import "./App.css";
import Title from "./Title.jsx"; //importing a component which is defined in a separate file
import Product from "./ProductTab.jsx";
import ProductTab from "./ProductTab.jsx";
import MessageBox from "./MessageBox.jsx";
// function Title() {
//   return <h1>I am the title</h1>;
// }

function Description() {
  return <p>This is a description</p>;
}
// function App() { //this function is the component

//   return <h1>Hello World</h1>;
// }

function App() {
  //this function is the component

  //return <Title/>; //returning another component inside this component
  // return (
  //   <div>
  //     <h1>This is my app component</h1>
  //     <p>Inside this app there is a title</p>
  //     <Title />
  //     <Description/>
  //     <div>2*2 and Written using curly braces {2*2}</div> 
  //   </div>
  // );
  return (
    <div>
      <ProductTab/>
      {/* <MessageBox userName = "Kanishk" textColor = "green"/>
      <MessageBox userName = "Kanishk" textColor = "blue"/> */}
    </div>
  )
}

export default App;
