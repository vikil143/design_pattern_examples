import Day from "./day"

export default class Week extends Day {
    week: string[]
    fullWeek:  string[]
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
        this.week = ["SUN", "MON", "TUE", "WED", "THUS", "FRI", "SAT"];
        this.fullWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    }

    getWeekIndex() {
        return this.date.getDay()
    }
    
    getWeekName(){
        let index = this.getWeekIndex()
        return this.week[index]
    }

    getFullWeekName(){
        let index = this.getWeekIndex();
        return this.fullWeek[index];
    }
}