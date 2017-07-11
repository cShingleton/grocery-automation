
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
  return this.reduce(function(obj, key) {
    if (obj[key[0]]) {
       obj[key[0]] += key[1];
    } else {
       obj[key[0]] = key[1];
    }
    return obj;
  }, {});
};

//STOCK UP
Object.prototype.stockUp = function(val) {
  deepFreeze(this);
  let obj = {};
  Object.keys(this).forEach(key => obj[key] = this[key] + val);
  return obj;
}

//STOCK UP REDUCE VERSION
Object.prototype.stockUp2 = function(val) {
  deepFreeze(this);
  return Object.keys(this).reduce((obj, key) => {
    obj[key] = this[key] + val;
    return obj
  }, {})
}

//EXPLAIN
Object.prototype.explain = function() {
  deepFreeze(this);
  let arr = [];
  Object.keys(this).forEach(key => {
    arr.push(`${key} ${this[key]}`);
  });
  return arr.join(', ');
};

//EXPLAIN REDUCE VERSION
Object.prototype.explain2 = function() {
  deepFreeze(this);
  const list = Object.keys(this);
  return Object.keys(this).reduce((str, key, index) => {
    str += `${key} ${this[key]}${(list[index + 1] ? ', ' : '')}`;
    return str;
  }, '');
}

console.log(data.countUp().stockUp2(5).explain());

