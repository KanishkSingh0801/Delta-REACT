import React from "react";

function print(event) {
  console.log("Button was clicked!");
  console.log(event);
}

function printTata() {
  console.log("Tataaaaa.......... !!");
}

function printHover() {
    console.log("This is a hover event");
}
function Button() {
  return (
    <div>
      <button onClick={print}>Click me</button>
      <p onClick={printTata}>This is a clickable paragraph</p>
      <h2>Below are non click events</h2>
      <p onMouseOver={printHover }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam
        temporibus odio. Rem accusamus voluptate atque labore magnam sed
        maiores?
      </p>
    </div>
  );
}

export default Button;
