describe("BankSatement", function(){
  var bankStatement;


  beforeEach(function() {
    bankStatement = new BankStatement();
  });

  it("should initialize with a empty bank balance", function(){
    expect(bankStatement.balance).toEqual(0);
  });

});
