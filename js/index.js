"use strict";

$(document).ready( () => {
  const numbers = $('span:not(.operator)');
  const getOperators = $('.operator');
  const calcScreen = $('#screen');
  let isOperating = false;
  // console.log(numbers);

    numbers.on('click', function () {
      // console.log(this.innerText);
      $('#screen').append(this.innerText);
      // console.log(displayValue);
    })

    getOperators.on('click', function (){
      const currentValue = $('#screen').text();


      if ($(this).text === 'x') {
        $(this).text('*');
      }

      if (!isOperating && parseInt(currentValue)) {
        calcScreen.append(this.innerText);
        isOperating = true;
      }
    })

    $('#clear').on('click', function(){
      calcScreen.text("");
    })


    $('#equals').on('click', function(){
      var expression = calcScreen.text();

      var evaluatedExpression = eval(expression);

      calcScreen.text(evaluatedExpression)
    })



})
