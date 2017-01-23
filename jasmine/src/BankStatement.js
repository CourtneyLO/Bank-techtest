function BankStatement(){
  this.date = [new Date()]
  this.balance = 0
  this.allBalances = []
};

BankStatement.prototype.deposit = function(amount) {
   this.balance = this.balance + amount;
   this.allBalances.push(this.balance)

 };

 BankStatement.prototype.withdraw = function(amount) {
   this.balance = this.balance - amount;
   this.allBalances.push(this.balance)
 };
