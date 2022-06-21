const BankAccount = require('../lib/BankAccount');

describe("BankAccount", () => {

  beforeEach(() => {
    account = new BankAccount();
  });

  it("opened account has a balance of zero", () => {
    expect(account.balance).toEqual(0);
  });

  it("initializes with an empty transaction object", () => {
    expect(account.transaction).toEqual([]);
  });

  describe("deposit", () => {
    it("user can deposit money", () => {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });
    
    it("user can deposit twice", () => {
      account.deposit(100);
      account.deposit(200);
      expect(account.balance).toEqual(300);
    });
  });
    
  describe("withdraw", () => {
    it("user can withdraw money", () => {
      account.deposit(100);
      account.withdraw(50);
      expect(account.balance).toEqual(50);
    });
  });
    
  describe("printStatement", () => {
    it("returns an empty statement for an empty bank account", () => {  
      expect(account.printStatement()).toEqual('date || credit || debit || balance')
    });
  });
});

// balance check, deposit, withdraw or close a closed account = throws error
// cannot withdraw more than deposited
// cannot withdraw negative amount
// cant deposit negative amount
