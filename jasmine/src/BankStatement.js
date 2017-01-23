function BankStatement(){
  this.date = [new Date().toDateString()]
  this.balance = 0
  this.allBalances = []
  this.allDeposits = []
  this.allWithdrawals = []
  this.transaction = []
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
   console.log(("  " + "Date").slice(-5) + "          " + "|" + "Withdrawal"+ "|" + "Deposits" + "|" + "Balances")
  for(i = 0; i < this.allBalances.length; i ++ ){
    console.log(this.date[0]+ "|" + ("         " + this.allDeposits[i]).slice(-10) + "|" + ("       " + this.allWithdrawals[i]).slice(-8) + "|" + this.allBalances[i])
  }
 }
