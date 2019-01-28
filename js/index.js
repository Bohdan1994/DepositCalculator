let CURRENCY;
let AMOUNT_OF_CONTRIBUTION;
let YEAR_RATE;
let TERM;
let TERM_OF_PAYMENT;
let result;
let percents = 0;
// const today = new Date();
let reportContent = {
    dateReports: [],
    amount: [],
    interestIncone: [],
    capitalization: []
};

$('.UAN, .USD, .EUR').click(function () {
    let newCurrency = this.innerHTML;
    $('#currencyDropDownMenu').text(newCurrency);
    CURRENCY = newCurrency;
});

$('#calculate').click(calculate);

class Calculator {
    constructor(contribution, year_rate, term){
        let result = 0;
        this.contr = contribution;
        this.rate = year_rate;
        this.term = term;

        function daysInMonth(m, y) {
            return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
         };
         function calcMonthRevenue() {
            console.log(this.contr, this.rate, this.term);
        };

      

    }
    numberOfMonth() {
        function monthDiff(d2, d1) {
            let months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth() + 1;
            months += d2.getMonth() + 1;
            return months <= 0 ? 0 : months;
        }

        function daysInMonth(date) {
            return new Date(date.getYear(), date.getMonth + 1, 0).getDate();
        }

        function dateDiff(date) {
            if(date2 && date2.getTime() && !isNaN(date2.getTime())) {
                
            }
         }
      console.log(dateDiff(this.term));
    }
     
    setResult(val) {
        result += val;
    }
}

    function calculate() {
    $('.table-content').html(null);
    AMOUNT_OF_CONTRIBUTION = $("#among-of-contribution").val();
    YEAR_RATE = $('#year-rate').val();
    TERM_OF_PAYMENT = new Date($('#datepicker').val());

    let calculator = new Calculator(AMOUNT_OF_CONTRIBUTION, YEAR_RATE ,TERM_OF_PAYMENT);
    calculator.numberOfMonth();
}

//     // let daysCounter = (date) => Math.ceil(Math.abs(new Date(date).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
//     // let numberOfDays = daysCounter(TERM_OF_PAYMENT);

//     result = +AMOUNT_OF_CONTRIBUTION;

//     for (let i = 0; i < getNumberOfMonth(); i++) {
//         console.log(getNumberOfMonth());
//         calcMonthRevenue(today.getMonth() + i, today.getFullYear());
//         drawReportContent({
//             date: getCurrentDate(i),
//             among: AMOUNT_OF_CONTRIBUTION,
//             percents: percents.toFixed(2),
//             result: result.toFixed(2)
//         });
//     }

   
//     function getNumberOfMonth() {
//         // console.log('object');
//         if (termOfPaymentDate.getFullYear() == today.getFullYear() && termOfPaymentDate.getMonth() == today.getMonth()) {
//             return 1 ;
//         } else return termOfPaymentDate.getMonth() + 1 - today.getMonth() + 1;
//     }

//     // function calcMonthRevenue(m, y) {
//     //     if (m == today.getMonth() + 1 && y == today.getFullYear()) {
//     //         console.log(daysInMonth(m, y));
//     //         for (let i = today.getDate(); i < daysInMonth(m, y); i++) {
//     //             percents = getDayRate();
//     //             result += percents;
//     //         }
//     //     } else {
//     //         for (let i = 0; i < daysInMonth(m, y); i++) {
//     //             percents = getDayRate();
//     //             result += percents;
//     //         }
//     //     }
//     // }

//     function daysInMonth(m, y) {
//         return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
//     }

//     function getDayRate() {
//         return ((result / 100) * +YEAR_RATE) / 365;
//     }

   

//     function getCurrentDate(shift) {
//         if (termOfPaymentDate.getMonth() == today.getMonth()) {
//             return `${termOfPaymentDate.getDate()}/${termOfPaymentDate.getMonth() + 1}/${termOfPaymentDate.getFullYear()}`;
//         } else {
//             let date = new Date(today.getFullYear(), today.getMonth() + 1 + shift, today.getDate());
//             console.log(date);
//             return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
//         }
//     }


// function drawReportContent(data) {
//     console.log(data);
//     $('.table-content').append(`
//    <tr>
//         <td>${data.date}</td>
//         <td>${data.among}</td>
//         <td>${data.percents}</td>
//         <td>${data.result}</td>
//    </tr>`);

// }