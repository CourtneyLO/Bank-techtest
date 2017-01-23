function BankStatement(){
  this.date = [new Date()]
  this.balance = 0
};

BankStatement.prototype.deposit = function(amount) {
   this.balance = this.balance + amount;

 };

 BankStatement.prototype.withdraw = function(amount) {
   this.balance = this.balance - amount;
 };
