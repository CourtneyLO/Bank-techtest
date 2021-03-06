describe("BankSatement", function(){
  var bankStatement;


  beforeEach(function() {
    bankStatement = new BankStatement();
  });

  it("should initialize with a empty bank balance", function(){
    expect(bankStatement.balance).toEqual(0);
  });

  it("should initialize with todays date", function(){
    expect(bankStatement.date).toEqual(new Date().toDateString());
  });

  it("should initialize with an empty allBalance array", function(){
    expect(bankStatement.allBalances).toEqual([])
  });

  it("should initialize with all no deposits made", function(){
    expect(bankStatement.allDeposits).toEqual([])
  });

  it("should initialize with no withdrawals made", function(){
    expect(bankStatement.allWithdrawals).toEqual([])
  })

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
    expect(bankStatement.allBalances).toEqual([1000, 3000, 2500]);
  });

  it("should return 1000 in the allDesposit array", function(){
    bankStatement.deposit(1000);
    bankStatement.deposit(2000);
    expect(bankStatement.allDeposits).toEqual([1000, 2000]);
  })

  it("should return 500 in the allWithdrawal array", function(){
    bankStatement.withdraw(500);
    expect(bankStatement.allWithdrawals).toEqual([500]);
  });

  it("should return '-' when bank account is used but a withdrawal is not made", function(){
    bankStatement.deposit(1000);
    expect(bankStatement.allWithdrawals).toEqual(["-"]);
  });

  it("should return '-' when bank account is used but a deposit is not made", function(){
    bankStatement.withdraw(500);
    expect(bankStatement.allDeposits).toEqual(["-"]);
  });

  it("should return an array of rows of transaction", function(){
    bankStatement.deposit(1000);
    bankStatement.transactions();
    expect(bankStatement.allTransactions).toEqual([ '  ' + new Date().toDateString() + '|      1000|       -|1000' ])
  })

  // it("should console.log the receipt of all transactions", function(){
  //   bankStatement.deposit(1000);
  //   console.log = jasmine.createSpy('log')
  //   bankStatement.transactions();
  //   bankStatement.receipt()
  //   expect(console.log).toHaveBeenCalledWith('  Date           |Withdrawal|Deposits|Balances' + '\n' +                                            "  " + new Date().toDateString()+ '|      1000|       -|1000')
  // })


  it("should return the receipt of all transactions", function(){
    bankStatement.deposit(1000);
    bankStatement.transactions();
    expect(bankStatement.receipt()).toEqual('  Date           |Withdrawal|Deposits|Balances' + '\n' +
                                            "  " + new Date().toDateString()+ '|      1000|       -|1000')
  })

});
