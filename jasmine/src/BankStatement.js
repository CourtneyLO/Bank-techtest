function BankStatement(){
  this.date = [new Date()]
  this.balance = 0
  this.allBalances = []
  this.allDeposits = []
  this.allWithdrawals = []
};

BankStatement.prototype.deposit = function(amount) {
  if(amount > 0) {
   this.balance = this.balance + amount;
   this.allBalances.push(this.balance)
   this.allDeposits.push(amount)
   this.withdraw('-')
 } else {
   this.allDeposits.push(amount)
 }
 };

 BankStatement.prototype.withdraw = function(amount) {
   if(amount > 0) {
     this.balance = this.balance - amount;
     this.allBalances.push(this.balance)
     this.allWithdrawals.push(amount)
     this.deposit("-")
   } else {
     this.allWithdrawals.push(amount)
   }
 };

 BankStatement.prototype.receipt = function(){
   console.log("date | deposit | withdrawal | balance" )
 }
