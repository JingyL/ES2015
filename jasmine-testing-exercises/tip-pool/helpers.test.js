describe("helpers test", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 30;
        tipAmtInput.value = 20;
        submitPaymentInfo();
      });

     it('should sum tip total on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 30;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
      
      });

      it('should sum bill total on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(30);
        billAmtInput.value = 30;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(60);
      
      });


      it('should calculate each tip percentage calculateTipPercent()', function () {
        expect(calculateTipPercent(30, 20)).toEqual(67);
        expect(calculateTipPercent(60, 40)).toEqual(67);
      
      });
    
      it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });
    
      it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });
    
    

      afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;

      });

});
