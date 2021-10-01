describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = '30';
        tipAmtInput.value = '20';

      });

     it('should add payment on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('30');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(67);
      });

      it('should not add payment on submitPaymentInfo()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);

      });


      it('should payment update #paymentTable on appendPaymentTable()', function () {
        curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        paymentTd = document.querySelectorAll('#paymentTable tbody tr td');
        expect(paymentTd[0].innerText).toEqual('$30');
        expect(paymentTd[1].innerText).toEqual('$20');
        expect(paymentTd[2].innerText).toEqual('67%');
    



      });
    
      it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '30',
            tipAmt: '20',
            tipPercent: 67,
          }
      
          expect(createCurPayment()).toEqual(expectedPayment);
      });
    
      it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        curPayment = createCurPayment();
    
        expect(curPayment).toEqual(undefined);
      });
    

      afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;

      });

});