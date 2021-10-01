
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount : 15000,
    years : 3,
    rate : 1.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('1902.40');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount : 23000,
    years : 4,
    rate : 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('11500.00');
});

/// etc
