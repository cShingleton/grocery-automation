const constructorRefactor = () => console.log('');
export default constructorRefactor;
'use strict';


function GroceryList(list) {
    this.state = {
        data: list,
        originalList: {},
        stockedUpList: {},
        counted: false
    }
    Object.freeze(this.state.data);
}

const data = new GroceryList([
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
]);

//COUNT UP
GroceryList.prototype.countUp = function() {
    if (this.state.counted) return this;

    this.state.originalList = this.state.data.reduce((obj, key) =>{
    if (obj[key[0]]) {
        obj[key[0]] += key[1];
    } else {
        obj[key[0]] = key[1];
    }
    return obj;
    }, {});

    Object.freeze(this.state.originalList);
    this.state.counted = true;
    return this;
};

//STOCK UP 
GroceryList.prototype.stockUp = function(val) {
    if(!this.state.counted) this.countUp();
    if(!val) val = 0;

    this.state.stockedUpList = Object.keys(this.state.originalList).reduce((obj, key) => {
        obj[key] = this.state.originalList[key] + val;
        return obj;
    }, {})

    return this;
}

//EXPLAIN 
GroceryList.prototype.explain = function() {

    if(!this.state.counted) this.countUp().stockUp(0);

    const list = Object.keys(this.state.stockedUpList);
    const explain = list.reduce((str, key, index) => {
        str += `${key} ${this.state.stockedUpList[key]}${(list[index + 1] ? ', ' : '')}`;
        return str;
    }, '');

    console.log(explain);
    return this;
} 

data.countUp().stockUp().explain();




