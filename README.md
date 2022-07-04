# Bank - Node

## Spec

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see:

```irb
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Quick Start

1. Clone this repo.

2. Install dependencies with:

   ```shell
   npm install
   ```

3. Run tests with:

   ```shell
   npm test
   ```

4. Run the Node REP:

   ```js
   node
   ```

5. Require in `account.js` with:

   ```js
   const Account = require("./lib/BankAccount.js")
   ```

6. Set up your account with:

   ```js
   myaccount = new BankAccount();
   ```

7. Use the account with the following methods:

| Method                     | Description                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| `myaccount.deposit(number)`  | deposit however much you want into your account, this figure is in pounds with pence as decimals.  |
| `myaccount.withdraw(number)` | withdraw however much you want from your account, this figure is in pounds with pence as decimals. |
| `myaccount.printStatement()` | prints a statement of all transactions so far                                                      |

You should see something similar to the below:

## Screen Preview

![Screenshot 2022-06-24 at 12 00 12](https://user-images.githubusercontent.com/100790478/175537156-ca70b807-e6fe-4f53-98ef-227b95e01d38.png)


