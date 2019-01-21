let CURRENCY;
let AMOUNT_OF_CONTRIBUTION;
let YEAR_RATE;
let TERM;
let TERM_OF_PAYMENT;
let result;
let percents = 0;
const today = new Date();
const URL_CURRENCY = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

$(document).ready(function () {
    $.getJSON(URL_CURRENCY, {
            format: "json"
        })
        .done(
            function (res) {
                console.log(res);
            });
});

$('.UAN, .USD, .EUR').click(function () {
    let newCurrency = this.innerHTML;
    $('#currencyDropDownMenu').text(newCurrency);
    CURRENCY = newCurrency;
});

$('#calculate').click(calculate);

function calculate() {
    AMOUNT_OF_CONTRIBUTION = $("#among-of-contribution").val();
    YEAR_RATE = $('#year-rate').val();
    TERM_OF_PAYMENT = $('#datepicker').val();

    let daysCounter = (date) => Math.ceil(Math.abs(new Date(date).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
    let termOfPaymentDate = new Date(TERM_OF_PAYMENT);
    let numberOfDays = daysCounter(TERM_OF_PAYMENT);
    console.log(numberOfDays);
    getDepositDate(TERM_OF_PAYMENT);

    result = +AMOUNT_OF_CONTRIBUTION;

    for (let i = 0; i < numberOfDays; i++) {
        percents = getDayRate();
        result += percents;
    }

    function getDayRate() {
        let revenueFromPercent = ((result / 100) * +YEAR_RATE);
        let dayPercent = (revenueFromPercent / 365);
        return dayPercent;
    }

    function getDepositDate(d) {
        let date = {
            day : d.split('/')[1],
            month: d.split('/')[0],
            year: d.split('/')[2]
        };

        console.log(date);

    }
    console.log(percents.toFixed(2), result.toFixed(2));
    
    
}

function drawReportContent(data) {
    // console.log($('.table-content'));
    console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
        $('.table-content').append(`
   <tr>
        <td>${data[i].step.date}</td>
        <td>${data[i].step.amongContribution}</td>
        <td>${data[i].step.revenuePercent}</td>
        <td>${data[i].step.capitalization}</td>
   </tr>`);
    };

}
drawReportContent([{
        step: {
            date: "vova",
            amongContribution: 10000,
            revenuePercent: 120,
            capitalization: 1200
        }
    },
    {
        step: {
            date: "vova",
            amongContribution: 10000,
            revenuePercent: 120,
            capitalization: 1200
        }
    }

]);