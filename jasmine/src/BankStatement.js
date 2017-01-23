function BankStatement(){
  this.date = [new Date()]
  this.balance = 0
  this.allBalances = []
  this.allDeposits = []
};

BankStatement.prototype.deposit = function(amount) {
   this.balance = this.balance + amount;
   this.allBalances.push(this.balance)
   this.allDeposits.push(amount)

 };

 BankStatement.prototype.withdraw = function(amount) {
   this.balance = this.balance - amount;
   this.allBalances.push(this.balance)
 };
