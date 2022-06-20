const BankAccount = require('../lib/BankAccount');

describe("BankAccount", () => {

  beforeEach(() => {
    account = new BankAccount();
  });

  it("opened account has a balance of zero", () => {
    expect(account.balance).toEqual(0);
  });

  it("user can deposit money", () => {
    account.deposit(100);
    expect(account.currentBalance()).toEqual(100);
  });
  
  it("user can deposit twice", () => {
    account.deposit(100);
    account.deposit(200);
    expect(account.currentBalance()).toEqual(300);
  });
  
  it("user can withdraw money", () => {
    account.deposit(100);
    account.withdraw(50);
    expect(account.currentBalance()).toEqual(50);
  });
});

// balance check, deposit, withdraw or close a closed account = throws error
// open already open account throws error
// cannot withdraw more than deposited
//cannot withdraw negative amount
// cant deposit negative amount
