describe("BankSatement", function(){
  var bankStatement;


  beforeEach(function() {
    bankStatement = new BankStatement();
  });

  it("should initialize with a empty bank balance", function(){
    expect(bankStatement.balance).toEqual(0);
  });

  it("should initialize with todays date", function(){
    expect(bankStatement.date).toEqual([new Date()]);
  });

  it("should initialize with an empty allBalance array", function(){
    expect(bankStatement.allBalances).toEqual([])
  });

  it("should increase balance when money in desposited", function(){
    bankStatement.deposit(1000);
    expect(bankStatement.balance).toEqual(1000);
  });

  it("should decrease balance when money in withdrawn", function(){
    bankStatement.deposit(1000);
    bankStatement.withdraw(500);
    expect(bankStatement.balance).toEqual(500);
  });

  it("should return a balance of 2500", function(){
    bankStatement.deposit(1000);
    bankStatement.deposit(2000);
    bankStatement.withdraw(500);
    expect(bankStatement.balance).toEqual(2500);
  });

  it("should return an array of balances", function(){
    bankStatement.deposit(1000);
    bankStatement.deposit(2000);
    bankStatement.withdraw(500);
    expect(bankStatement.allBalances).toEqual([1000, 3000, 2500])
  });

});
