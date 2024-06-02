import Week from "./week"

export default class MyDate extends Week {
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
            super()
        } else if (typeof month === "undefined") {
            super(yearOrValue)
        } else {
            // consider an assertion here that `yearOrValue` is a number
            super(yearOrValue as number, month, date, hours, minutes, seconds, ms)
        }
    }

}
