// Indicates that the Bank class is exported from the file
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}
/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
    // Array to store all bank accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account by account number at the bank
     * @param {string} accountNumber Account number of the bank account to find
     * @returns
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * Creates a new acount with the given name, age and account number
     * @param name -- name of customer
     * @param age -- age of customer
     * @param accountNumber -- unique account number for each customer
     * @returns -- newly created bank account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists");
        }

        const newAccount: BankAccount = { name, age, accountNumber, balance: 0 };
        this.accounts.push(newAccount);
        return newAccount;
    }

    /**
     * Deposit money to a bank account
     * @param accountNumber -- account number of the account to deposit money
     * @param amount -- amount to deposit
     * @returns -- updated bank account with new balance if true
     */
    public deposit(accountNumber: string, amount: number): boolean {
        if (amount <= -1) {
            throw new Error("Deposit amount must be postive");
        }

        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Invalid account number");
        }

        account.balance += amount;
        return true;
    }

    /**
     * Withdraw money from a bank account
     * @param accountNumber -- account number of the account to withdraw money
     * @param amount -- amount to withdraw
     * @returns -- updated bank account with new balance if true
     */
    public withdraw(accountNumber: string, amount: number): boolean {
        if (amount <= -1) {
            throw new Error("Withdrawal amount must be postive");
        }

        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Invalid account number");
        }

        if (account.balance < amount) {
            throw new Error("Insufficient funds");
        }

        account.balance -= amount;
        return true;
    }

    /**
     * Get the balance of a bank account
     * @param accountNumber -- account number of the account to get balance
     * @returns -- balance of the account
     */
    public checkBalance(accountNumber: string): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Invalid account number");
        }

        return account.balance;
    }
}