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
// class CoffeeMachine {
//     constructor(power) {
//         this._power = power;
//     }

//     get power() {
//         return this._power;
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);
// console.log(`Power is ${coffeeMachine.power}W`);
//=========================================================
// class CoffeeMachine {
//     _waterAmount = 0;

//     setWaterAmount(value) {
//         if(value < 0) throw new Error('Sub zero amount of water');
//         this._waterAmount = value;
//     }

//     getWaterAmount() {
//         return this._waterAmount;
//     }
// }

// new CoffeeMachine().setWaterAmount(100);
//==========================================================
class CoffeeMachine{
    #waterAmount = 0;
    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error('subzero value');
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
console.log(machine.#waterAmount);