class MyCalendarTwo {
    days
    constructor() {
        this.days = []
    }

    book(start, end) {
        for(let index = start; index < end; index++){
            if(this.days[index] === 2) return false;
        }

        for(let index = start; index < end; index++){
            this.days[index] = (this.days[index] || 0) + 1; 
        }
           
        return true;
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

const calendar = new MyCalendarTwo();
calendar.book(5,10);

console.log(calendar.days); // true


const a = [[803251,1000000],[1201,170174],[729719,875178],[587666,772070],[585756,712264],[818428,1000000],[581529,715739],[265130,460403],[225704,336811],[867005,1000000],[405979,555025],[365681,513209],[127431,275338],[648529,807976],[482570,597888],[155391,269927],[497288,637017],[323844,445205],[345266,520771],[624908,754410],[398517,511926],[179349,365078],[558791,685418],[976691,1000000],[158046,260306],[739048,899221],[980299,1000000],[914849,1000000],[130617,311240],[177730,288707],[39559,227877],[985827,1000000],[932135,1000000],[827715,970913],[973788,1000000],[421086,608296],[824703,967270],[219720,398189],[506788,667695],[921998,1000000]]

a.map(([start, end]) => {
    calendar.book(start, end);
})

console.log(calendar.days); // false