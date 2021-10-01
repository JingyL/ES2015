window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
      calculateMonthlyPayment(values);
      updateMonthly(monthly);
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
// let monthlyPayment = document.getElementById("monthly-payment").value;
values = {
  amount : 15000,
  years : 3,
  rate : 1.5
};
monthly = 0;
function setupIntialValues() {
  document.getElementById("loan-amount").value = values.amount;
  document.getElementById("loan-years").value = values.years;
  document.getElementById("loan-rate").value = values.rate;
  // monthly = calculateMonthlyPayment(values);
  // document.getElementById("monthly-payment").value = monthly;
  // const p = document.querySelector("p");
  // p.append(monthly);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values.amount = document.getElementById("loan-amount").value;
  values.years = document.getElementById("loan-years").value;
  values.rate = document.getElementById("loan-rate").value;
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.


function calculateMonthlyPayment(values) {
  let loanAmount = values.amount;
  let i = values.rate / 12;
  let n = values.years * 12;
  divident = loanAmount * i;
  divisor = 1 - Math.pow(1 + i, -n);
  monthly = (divident / divisor).toFixed(2);
  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").value = monthly;
  const p = document.querySelector("p");
  p.innerText = monthly;
}
