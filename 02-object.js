// Soal 1

const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function() {
      console.log("hello world")
    }
  }
  
  /// EDIT HERE
person.name = "Jon",
person.favDrinks[1] = "Tap Water",
person.greeting = function(name) {
    return `Hello, ${name}`;
}
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));


// Soal 2
function getObjectValue(milkBasedCoffee, stringPath) {
    let splitString = stringPath.split('.');
    if (milkBasedCoffee[splitString[0]][splitString[1]][splitString[2]] !== undefined) {
    return milkBasedCoffee[splitString[0]][splitString[1]][splitString[2]];
    } else {
        return null;
}
}

  const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }
    },
  }
  
  const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
  const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
  const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
  
  console.log(espresso);
  console.log(coffeeBrand);
  console.log(isMilkVegan)