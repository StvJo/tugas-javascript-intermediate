function sayHello() {
    console.log("Hello");
}

function greeting() {
  const formButton = document.querySelector('button');
  const elInputName = document.querySelector("#input-name");
  formButton.onclick = function() { alert('Hello, ' + elInputName.value); };
}

export {sayHello, greeting};