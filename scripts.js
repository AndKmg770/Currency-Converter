function convertToINR()
{
  var amount= document.getElementById("amountinput").value;
  var currency1= document.getElementById("curr1").value;
  var currency2= document.getElementById("curr2").value;
  var convrates={
    INR:{USD:0.012, YEN:1.85, INR:1, EUROS:0.011},
    USD:{INR:83.65, YEN:154.62, USD:1, EUROS:0.94},
    YEN:{INR:0.54, YEN:1, USD:0.0065, EUROS:0.0061},
    EUROS:{INR:88.95, YEN:164.40, USD:1.06, EUROS:1}
  };
  var convertedamt= amount*convrates[currency1][currency2];
  document.getElementById("result").innerText=currency2+" Value = " +convertedamt.toFixed(2);
}
