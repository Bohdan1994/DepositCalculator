class Calculator  {
    constructor(contribution, year_rate, term) {
        this.result = contribution;
        this.contr = contribution;
        this.rate = year_rate;
        this.term = new Date(term);
        this.percents = 0;

    }
    numberOfMonth(dat1, dat2) {
        function monthDiff(d2, d1) {
            var months;
            console.log(d2, d1);
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth() + 1;
            months += d2.getMonth() + 1;
            return months <= 0 ? 0 : months;
        }
        
        function daysInMonth(date) {
            return new Date(date.getYear(), date.getMonth() + 1, 0).getDate();
        }    
        
        function diffDate(date1, date2) {
            if (date2 && date2.getTime() && !isNaN(date2.getTime())) {
                var months = monthDiff(date1, date2);
                var days = 0;
        
                if (date1.getUTCDate() >= date2.getUTCDate()) {
                    days = date1.getUTCDate() - date2.getUTCDate();
                }
                else {
                    months--;
                    days = date1.getUTCDate() - date2.getUTCDate() + daysInMonth(date2);
                }
                return {mm : months, dd: days};
                // Use the variables months and days how you need them.
            }
           
        }
        return diffDate(dat1, dat2);
}   
    getDayRate() {
        let res = (((this.result / 100) * this.rate) / 365);
        console.log(res, this.result);
        this.percents = res;
        return res; 
    }

    setResult(val) {
        this.result += val;
    }

    caclFirstAndLastMonth(first, last) {
        console.log(first,last);
        let firstMonthDaysLeft = getDaysInMonth(first.getMonth() + 1, first.getFullYear()),
            lastMonthDaysLeft  = getDaysInMonth(last.getMonth() + 1, last.getFullYear());

       if(first.getMonth() != last.getMonth() && first.getMonth() + 1 != last.getMonth()){
        for(let i = 0; i < firstMonthDaysLeft; i++) {
            console.log(firstMonthDaysLeft);
            this.setResult(this.getDayRate());
        }

        for(let i = 0; i < lastMonthDaysLeft; i++) {
            this.setResult(this.getDayRate());
        }
    }else {
        for(let i = 0; i < getDaysInMonth(first.getMonth() + 1, first.getFullYear()) - first.getDate(); i++) {
            console.log("2", i);
            this.setResult(this.getDayRate());

        }
    }
        function getDaysInMonth(m, y) {
            return m===2 ? y & 3 || !(y%25) && y & 15 ? 28 : 29 : 30 + (m+(m>>3)&1);
        }
    }
      
}

