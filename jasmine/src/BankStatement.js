function BankStatement(){
  this.date = new Date().toDateString()
  this.balance = 0
  this.allBalances = []
  this.allDeposits = []
  this.allWithdrawals = []
  this.allTransactions = []
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

 BankStatement.prototype.transactions = function(){
   this.headings = ("  " + "Date").slice(-5) + "           " + "|" + "Withdrawal"+ "|" + "Deposits" + "|" + "Balances"
  for(i = 0; i < this.allBalances.length; i ++ ){
    this.allTransactions.push("  "+ this.date  + "|" + ("         " + this.allDeposits[i]).slice(-10) + "|" + ("       " + this.allWithdrawals[i]).slice(-8) + "|" + this.allBalances[i])
  }
 }

BankStatement.prototype.receipt = function() {
  this.transaction = this.allTransactions.map(function(x){
    return '\n' + x
  })
  return this.headings + this.transaction
}
