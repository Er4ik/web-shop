'use strict';

class Adder {
    constructor(...args) {
        this.sum = 0;
        for (let key = 0; key < args.length; key++) {
            this.sum += args[key];
        }
    }

}
const adderEx = new Adder(1, 2, 4, 5, 64, 65);
console.dir(adderEx);
console.log(typeof NaN);