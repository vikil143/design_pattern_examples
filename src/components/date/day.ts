export default class Day {
    date: Date
    constructor();
    constructor(value: number | string);
    constructor(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);    
    constructor(
        yearOrValue?: number | string,
        month?: number,
        date?: number,
        hours?: number,
        minutes?: number,
        seconds?: number,
        ms?: number
    ) {
        if (typeof yearOrValue === "undefined") {
            this.date = new Date()
        } else if (typeof month === "undefined") {
            this.date = new Date(yearOrValue)
        } else {
            // consider an assertion here that `yearOrValue` is a number
            this.date = new Date(yearOrValue as number, month, date, hours, minutes, seconds, ms)
        }
    }
}