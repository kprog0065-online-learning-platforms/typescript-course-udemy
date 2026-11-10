"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const oldCivic = {
    name: "Civic",
    year: 2000,
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
};
const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
//# sourceMappingURL=interfaces.js.map