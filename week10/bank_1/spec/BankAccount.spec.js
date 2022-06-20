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
  


  
  //   it("can deposit money", () => {  
  //   account1 = new BankAccount();
  //   account1.deposit(100);
  //   console.log(account1);
  //   expect(account1.currentBalance).toBe([100]);
  // });

  // new acc has 0 balance
  // can deposit money
  // can withdraw money
  // add twice
  // withdraw twice

  // balance check, deposit, withdraw or close a closed account = throws error
  // open already open account throws error
  // cannot withdraw more than deposited
  //cannot withdraw negative amount
  // cant deposit negative amount

});