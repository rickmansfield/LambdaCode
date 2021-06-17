// function Fruit(attrs) {
//   this.type = attrs.type;
//   this.name = attrs.name;
//   this.isRipe = attrs.isRipe;
//   this.calories = attrs.calories;
// }

// Fruit.prototype.shipped = function(destination) {
//   console.log(`Shipping ${this.name} to ${destination}`);
// };

// Fruit.prototype.calculateCals = function() {
//   console.log(`Calories in ${this.name} are ${this.calories * 200}`);
// };
class Fruit{
    constructor(attrs){
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
    }
    shipped (destination) {
      console.log(`Shipping ${this.name} to ${destination}`);
    }
    calculateCals() {
      console.log(`Calories in ${this.name} are ${this.calories * 200}`);
    }
  }
  
  // function Banana(bananaAttrs) {
  //   Parent.call(this, bananaAttrs);
  //   this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
  // }
  
  // Banana.prototype = Object.create(Fruit.prototype);
  
  // Banana.prototype.checkIfMonkeysLikeIt = function() {
  //   if(this.doMonkeysLikeIt) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  
  class Banana extends Fruit {
    constructor(bananaAttrs) {
      super(bananaAttrs);
      this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
    }
    checkIfMonkeysLikeIt() {
      if(this.doMonkeysLikeIt) {
        return true;
      } else {
        return false;
      }
  }
}