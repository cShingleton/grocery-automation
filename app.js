
//Labs Answers
const data = [
  ['apples', 73],
  ['pears', 12],
  ['oranges', 97],
  ['grapes', 387],
  ['grapes', 88],
  ['pears', 33],
  ['apples', 75],
  ['grapes', 23],
  ['oranges', 86],
  ['kiwis', 201]
];

//COUNT UP
Array.prototype.countUp = function() {
  deepFreeze(this);
  return this.reduce(function(obj, val) {
    if (obj[val[0]]) {
       obj[val[0]] += val[1];
    } else {
       obj[val[0]] = val[1];
    }
    return obj;
  }, {});
};

console.log(data.countUp());

const fruit = {
  apples: 148,
  pears: 45,
  oranges: 183,
  grapes: 498,
  kiwis: 201
};


//STOCK UP
Object.prototype.stockUp = function(val) {
  deepFreeze(this);
  let obj = {};
  Object.keys(this).forEach(key => obj[key] = this[key] + val);
  return obj;
}

console.log(fruit.stockUp(7));


//EXPLAIN
const fruit2 = {
  apples: 148,
  pears: 45,
  oranges: 183,
  grapes: 498,
  kiwis: 201
}

Object.prototype.explain = function() {
  deepFreeze(this);
  let arr = [];
  Object.keys(this).forEach(key => {
    arr.push(`${key} ${this[key]}`);
  });
  return arr.join(', ');
};

console.log(fruit2.explain());

console.log(data.countUp().stockUp(5).explain());

