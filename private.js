// class CoffeeMachine {
//     _waterAmount = 0;

//     set waterAmount(value) {
//         if (value < 0) throw new Error('minus');
//         this._waterAmount = value
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     constructor(power) {
//         this._power = power;
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = -10;
//?=========================================================
class CoffeeMachine {
    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }
}

let coffeeMachine = new CoffeeMachine(100);
console.log(`Power is ${coffeeMachine.power}W`);