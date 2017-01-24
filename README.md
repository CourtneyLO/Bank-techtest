# Bank-techtest-javascript
Author: Courtney Osborn

### Specifications

```
- You should be able to interact with the your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).
```

### Instructions


`$ git clone https://github.com/CourtneyLO/Bank-techtest`

`$ cd Bank-techtest`

`$ open SpecRunner` - to see tests

 #### On console:
```
  > bank = new BankStatement()
  > bank.deposit(2000)
  > bank.deposit(1000)
  > bank.withdraw(500)
  > bank.transaction()
  > bank.receipt()

  Date           |Withdrawal|Deposits|Balances
  Tue Jan 24 2017|      2000|       -|2000,
  Tue Jan 24 2017|      1000|       -|3000,
  Tue Jan 24 2017|         -|     500|2500
```
