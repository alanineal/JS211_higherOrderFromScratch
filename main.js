//.map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.


const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

//.reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

const foodOrders = [10.98, 7.03, 15.75, 4.02, 18.12, 8.23, 25.25, 15.33, 2.43]

const addTogether = ((x, y) => (x + y))

const reducerEngine = (func, arr, num) => {
  let accumulator = num ? num : 0
  let len = arr.length
  for (let i = 0; i != len; i++) { 
    accumulator = func(accumulator, arr[i])
  }
  return accumulator.toFixed(2)
}

console.log("foodOrders_revenue/today: " + "$" + reducerEngine(addTogether, foodOrders))
console.log("foodOrders_revenue/today+yesterday: " + "$" + reducerEngine(addTogether, foodOrders, 103.45))

//.filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);