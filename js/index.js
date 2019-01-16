let CURRENCY;
let AMOUNT_OF_CONTRIBUTION;
let YEAR_RATE;
let TERM;
let TERM_OF_PAYMENT;
// let TYPE_OF_PAYMENT = 'Місяців'; 
const URL_CURRENCY = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  
    $(document).ready(function () {
      $.getJSON(URL_CURRENCY, 
        {format: "json"})
        .done(
            function(res) {
                console.log(res);
            });
        });

$('.UAN, .USD, .EUR').click(function() {
    let newCurrency = this.innerHTML;
    $('#currencyDropDownMenu').text(newCurrency);
    console.log(newCurrency);
    CURRENCY = newCurrency;
});

// $('.month, .years').click(function() {
//     let newTermOfPayment = this.innerHTML;
//     $('#term-of-payment').text(newTermOfPayment);
//     TYPE_OF_PAYMENT = newTermOfPayment;
// });

// $('#amongOfContribution').keypress(function() {
//     // AMOUNT_OF_CONTRIBUTION = this.innerHTML
//     console.log(this.value);
// })

$('#calculate').click(calculate);

function calculate() {
    AMOUNT_OF_CONTRIBUTION = $("#among-of-contribution").val();
    YEAR_RATE = $('#year-rate').val();
    TERM_OF_PAYMENT = $('#datepicker').val();
    // TERM = $('#term').val();
    // console.log(   CURRENCY, 
    //             `\n`,AMOUNT_OF_CONTRIBUTION,
    //             `\n`, YEAR_RATE, 
    //             `\n`,TERM, 
    //             `\n`,TERM_OF_PAYMENT, 
    //             `\n`,TYPE_OF_PAYMENT);
    //console.log(TERM_OF_PAYMENT); 
    let daysCounter = (date) => Math.ceil(Math.abs(new Date(date).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
    let numberOfDays = daysCounter(TERM_OF_PAYMENT);
    console.log(numberOfDays);
    dayRate(numberOfDays);
}

function dayRate(days) {
    let revenueFromPercent = ((10000 / 100) * +YEAR_RATE);
    let result = +AMOUNT_OF_CONTRIBUTION + (revenueFromPercent / 365) * days;
    return console.log(result.toFixed(2));
}







