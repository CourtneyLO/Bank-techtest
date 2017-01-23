describe("BankSatement", function(){
  var bankStatement;


  beforeEach(function() {
    bankStatement = new BankStatement();
  });

  it("should initialize with a empty bank balance", function(){
    expect(bankStatement.balance).toEqual(0);
  });

  it("should initialize with todays date", function(){
    expect(bankStatement.date).toEqual(new Date());
  });

  it("should increase balance when money in desposited", function(){
  bankStatement.deposit(1000);
  expect(bankStatement.balance).toEqual(1000);
  });

});
