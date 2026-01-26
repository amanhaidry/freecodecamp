/* Build a Bank Account Management Program
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should define a class named BankAccount with a constructor. The constructor should set the default balance to 0 and initialize an empty array named transactions to store transaction records as objects.

Each transaction stored in the transactions array should be an object with two properties: type and amount. The type property should be either deposit or withdraw, and the amount property should be the amount deposited or withdrawn.

You should define a method named deposit that takes the deposit amount as a parameter. When the deposit amount is greater than 0, it should:

Push a new object to the transactions array with a type of deposit and the amount deposited.
Update the balance.
Return "Successfully deposited $[amount]. New balance: $[balance]".
If the amount is less than or equal to 0, the deposit method should return "Deposit amount must be greater than zero.".

You should define a method named withdraw that takes an amount as a parameter. This method should update the current balance according to withdrawals. When the amount to be withdrawn is greater than 0 and less than or equal to the current balance, it should:

Push a new object to the transactions array with a type of withdraw and the amount withdrawn.
Update the balance.
Return "Successfully withdrew $[amount]. New balance: $[balance]".
If the amount to be withdrawn is less than or equal to 0 or greater than the current balance, the withdraw method should return "Insufficient balance or invalid amount.".

You should define a method named checkBalance that returns the current balance in the format "Current balance: $[balance]".

You should define a method named listAllDeposits that iterates through the transactions array and returns all deposits in the format "Deposits: amount,amount,...".

You should define a method named listAllWithdrawals that iterates through the transactions array and returns all withdrawals in the format "Withdrawals: amount,amount,...".

You should create a new instance of BankAccount named myAccount.

Your myAccount bank account should have at least five transactions.

Your myAccount bank account should have at least two deposits.

Your myAccount bank account should have at least two withdrawals.

Your myAccount bank account should have a balance greater than $100.
*/


// BankAccount class
class BankAccount {
  constructor() {
    this.balance = 0; // default balance
    this.transactions = []; // empty array to store transactions
  }

  // Deposit method
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  // Withdraw method
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  // Check balance method
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // List all deposits
  listAllDeposits() {
    const deposits = this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => t.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  // List all withdrawals
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => t.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// a new instance of BankAccount
const myAccount = new BankAccount();

// five transactions (2 deposits, 2 withdrawals, balance > 100)
console.log(myAccount.deposit(200)); // Deposit #1
console.log(myAccount.deposit(150)); // Deposit #2
console.log(myAccount.withdraw(50)); // Withdrawal #1
console.log(myAccount.withdraw(100)); // Withdrawal #2
console.log(myAccount.deposit(75)); // Deposit #3 (extra transaction)

// Check balance
console.log(myAccount.checkBalance());

// List deposits
console.log(myAccount.listAllDeposits());

// List withdrawals
console.log(myAccount.listAllWithdrawals());
