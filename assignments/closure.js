// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function space(outterSpace) {
  const star = "stars";
  console.log(`Theres just a bunch of ${star} up here in ${outterSpace}.`);
  debugger;

  function sky(air) {
    const cloud = "clouds";
    console.log(
      `I'm in the ${air} in a plane  its night time and i can see the ${star}. `
    );
    debugger;

    function ground(earth) {
      const tree = "trees";
      console.log(
        `I live on the ${earth} where there are ${tree} from here i can see the ${cloud} in the ${air} and the ${star} in ${outterSpace}.`
      );
      debugger;
    }
    ground("ground");
  }
  sky("sky");
}
space("space");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
