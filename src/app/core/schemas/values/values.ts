/* eslint-disable */
export class Values {
    wheelbase: number;
    carlength: number;
    carwidth: number;
    curbweight: number;
    enginesize: number;
    boreratio: number;
    horsepower: number;
    citympg: number;
    highwaympg: number;

    constructor(
        wheelbase: number,
        carlength: number,
        carwidth: number,
        curbweight: number,
        enginesize: number,
        boreratio: number,
        horsepower: number,
        citympg: number,
        highwaympg: number
    ) {
        this.wheelbase = wheelbase;
        this.carlength = carlength;
        this.carwidth = carwidth;
        this.curbweight = curbweight;
        this.enginesize = enginesize;
        this.boreratio = boreratio;
        this.horsepower = horsepower;
        this.citympg = citympg;
        this.highwaympg = highwaympg;
    }
}

