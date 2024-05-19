import MyDate from "./date"


function main() {
    const today = new MyDate();
    console.log("Today", today.getFullWeekName())
}

export default main