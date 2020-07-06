var card_1,card_2,win,currency,x,free_currency_ammount
window.onload = function (){
  $('#failure-bet').hide();
  $('#card_2_label').hide();
  $('#card_1_label').hide();
  $('#hi_button').hide();
  $('#lo_button').hide();
  $('#win-lose').hide();

  free_currency_ammount = 0
  currency = 1000

  document.getElementById('currency').innerHTML = currency
}

function free_currency(){
  free_currency_ammount = parseInt(document.getElementById('free-currency').value)
  currency += free_currency_ammount
  document.getElementById('currency').innerHTML = currency

}

function bet_set(){
  $('#card_2_label').hide();
  $('#card_1_label').hide();
  $('#win-lose').hide();
  $('#hi_button').hide();
  $('#lo_button').hide();

  bet = document.getElementById('bet').value
  if (bet > currency){
    console.log('failure placing bet');
    $('#failure-bet').show();
  }else {
    currency -= bet
    document.getElementById('currency').innerHTML = currency
    card_1 = 1 + (Math.floor(Math.random()*10))
    $('#card_1_label').show();
    $('#hi_button').show()
    $('#lo_button').show()
    document.getElementById('card_1').innerHTML = card_1
    /*console.log(`bet: ${bet}`);*/
    console.log(`currency: ${currency}`);
    console.log(`card one: ${card_1}`);
    $('#failure-bet').hide();
  }

}


function isNumberKey(evt){
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}


function hi_bet(){
  console.log(`you bet ${bet} on hi`);
  $('#hi_button').hide();
  $('#lo_button').hide();
  card_2 = 1 + (Math.floor(Math.random()*10))
  $('#card_2_label').show();
  document.getElementById('card_2').innerHTML = card_2
  console.log(`card two: ${card_2}`);

  if (card_1 < card_2) {
    currency = currency + 2 * bet
    document.getElementById('currency').innerHTML = currency
    document.getElementById('win-lose').innerHTML = 'you win'
    console.log('you win');
    console.log(`new currency: ${currency}`);
    console.log('');
    $('#win-lose').show();


  }else if (card_1 == card_2) {
    document.getElementById('win-lose').innerHTML = 'they are the same! 5 times bet!'
    console.log('they are the same!');
    console.log(`new currency: ${currency}`);
    console.log('');
    $('#win-lose').show();
    currency += 6 * bet
    document.getElementById('currency').innerHTML = currency
  }else {

    document.getElementById('win-lose').innerHTML = 'you lose'
    console.log('you lose');
    console.log(`new currency: ${currency}`);
    console.log('');
    $('#win-lose').show();

  }
}

function lo_bet(){
  console.log(`you bet ${bet} on lo`);
  $('#hi_button').hide();
  $('#lo_button').hide();
  card_2 = 1 + (Math.floor(Math.random()*10))
  $('#card_2_label').show();
  document.getElementById('card_2').innerHTML = card_2
  console.log(`card two: ${card_2}`);

  if (card_1 > card_2) {
    currency = currency + 2 * bet
    document.getElementById('currency').innerHTML = currency
    document.getElementById('win-lose').innerHTML = 'you win'
    console.log('you win');
    console.log(`new currency: ${currency}`);
    console.log('');
    $('#win-lose').show();

  }else if (card_1 == card_2) {
    document.getElementById('win-lose').innerHTML = 'they are the same! 5 times bet!'
    console.log('they are the same!');
    console.log(`new currency: ${currency}`);
    console.log('');
    $('#win-lose').show();
    currency += 6 * bet
    document.getElementById('currency').innerHTML = currency
  }else {
    document.getElementById('win-lose').innerHTML = 'you lose'
    console.log('you lose');
    console.log(`new currency: ${currency}`);
    console.log('');
    $('#win-lose').show();
  }
}
