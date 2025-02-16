function outerFunction() {
  let message = "Hello from closure!";
  return function innerFunction() {
    console.log(message);
  };
}

const closureExample = outerFunction();

closureExample(); // OP: "Hello from closure!"
