let CURRENCY;
let AMOUNT_OF_CONTRIBUTION;
let YEAR_RATE = 0;
let TERM = 0;
let TERM_OF_PAYMENT = 0;
let TYPE_OF_PAYMENT = 'Місяців'; 

$('.UAN, .USD, .EUR').click(function() {
    let newCurrency = this.innerHTML;
    $('#currencyDropDownMenu').text(newCurrency);
    console.log(newCurrency);
    CURRENCY = newCurrency;
});

$('.month, .years').click(function() {
    let newTermOfPayment = this.innerHTML;
    $('#term-of-payment').text(newTermOfPayment);
    TYPE_OF_PAYMENT = newTermOfPayment;
});

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
    
}


