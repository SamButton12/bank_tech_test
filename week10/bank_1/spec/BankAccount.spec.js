const BankAccount = require('../lib/BankAccount');

describe("BankAccount", () => {
  it("opened account has a balance of zero", () => {
    account1 = new BankAccount();
    expect(account1.balance).toEqual(0);
  });

});