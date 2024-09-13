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
}