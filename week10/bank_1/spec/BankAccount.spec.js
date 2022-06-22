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
      account.deposit(100, '21/06/22');
      expect(account.balance).toEqual(100.00);
    });
    
    it("user can deposit twice", () => {
      account.deposit(100, '21/06/22');
      account.deposit(200, '21/06/22');
      expect(account.balance).toEqual(300.00);
    });
  });
    
  describe("withdraw", () => {
    it("user can withdraw money", () => {
      account.deposit(100, '21/06/22');
      account.withdraw(50);
      expect(account.balance).toEqual(50.00);
    });
  });
    
  describe("printStatement", () => {
    it("returns an empty statement for an empty bank account", () => {  
      expect(account.printStatement()).toEqual('date || credit || debit || balance')
    });

    it("displays a statement with one deposit", () => {
      account.deposit(100, '21/06/22');
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n21/06/22 || 100.00 || || 100.00');
    });
    
    it("displays a statement with two different deposits", () => {
      account.deposit(100, '21/06/22');
      account.deposit(99.99, '22/06/22');
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n21/06/22 || 100.00 || || 100.00,\n22/06/22 || 99.99 || || 199.99');
    });
    
    it("displays a statement with two different withdrawals", () => {
      account.withdraw(100, '21/06/22');
      account.withdraw(99.99, '22/06/22');
      expect(account.printStatement()).toEqual('date || credit || debit || balance\n21/06/22 || || 100.00 || -100.00,\n22/06/22 || || 99.99 || -199.99');
    });
  });
});

// balance check, deposit, withdraw or close a closed account = throws error
// cannot withdraw more than deposited
// cannot withdraw negative amount
// cant deposit negative amount
