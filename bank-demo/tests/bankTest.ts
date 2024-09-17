import Bank from '../src/bank';  // Ensure the path is correct

// Setup
const bnk = new Bank();

// Scenario 1 - Account Creation - Successful Creation
const account = bnk.createAccount("John Doe", 29, "1002304000");
if (account.accountNumber === "1002304000") {
    console.log("Scenario 1 passed - account creation");
} else {
    console.log("Scenario 1 failed - account creation");
}

// Scenario 2 - Account Creation - Account Already Exists
try {
    bnk.createAccount("John Doe", 29, "1002304000");  // Duplicate account number
    console.log("Scenario 2 failed - account creation should have failed due to duplicate account");
} catch (_) {
    console.log("Scenario 2 passed - duplicate account creation");
}

// Scenario 1 - Deposit Feature - Successful Deposit
const account2 = bnk.createAccount("Jane Doe", 35, "1002304001");
const depositResult = bnk.deposit("1002304001", 500);  // Deposit 500 into valid account
try {
    if (depositResult && account2.balance === 500) {  // Check the balance of `account2`
        console.log("Scenario 1 - deposit feature passed - valid account deposit");
    } else {
        console.log("Scenario 1 - deposit feature failed");
    }
} catch (_) {
    console.log("Scenario 1 - deposit feature failed");
}

// Scenario 2 - Deposit Feature - Invalid Account
try {
    bnk.deposit("99999999999", 500);  // Deposit in an invalid account
    console.log("Scenario 2 - deposit feature failed - valid account");
} catch (_) {
    console.log("Scenario 2 - deposit feature passed - invalid account caught");
}

// Scenario 3 - Deposit Feature - Negative Amount
try {
    bnk.deposit("1002304001", -500);  // Deposit negative amount
    console.log("Scenario 3 - deposit feature failed - positive amount");
} catch (_) {
    console.log("Scenario 3 - deposit feature passed - negative amount caught");
}

// Scenario 1 - Withdrawal Feature - Successful Withdrawal
bnk.deposit("1002304000", 1000);  // Deposit 1000 into John Doe's account
const withdrawResult = bnk.withdraw("1002304000", 500);  // Withdraw 500 from John Doe's account
try {
    if (withdrawResult && account.balance === 500) {  // Balance should now be 500 after approved withdrawal
        console.log("Scenario 1 - withdrawal feature passed - sufficient funds");
    } else {
        console.log("Scenario 1 - withdrawal feature failed");
    }
} catch (_) {
    console.log("Scenario 1 - withdraw feature failed");
}

// Scenario 2 - Withdrawal Feature - Insufficient Funds
try {
    bnk.withdraw("1002304000", 2000);  // Withdraw more than available balance
    console.log("Scenario 2 - withdrawal feature failed - insufficient funds");
} catch (_) {
    console.log("Scenario 2 - withdrawal feature passed - insufficient funds caught");
}

// Scenario 3 - Withdrawal Feature - Invalid Account
try {
    bnk.withdraw("99999999999", 500);  // Withdraw from an invalid account
    console.log("Scenario 3 - withdrawal feature failed - valid account");
} catch (_) {
    console.log("Scenario 3 - withdrawal feature passed - invalid account caught");
}

// Scenario 1 - Balance Check Feature - Successful Check
const balance = bnk.checkBalance("1002304001");  // Check balance of Jane Doe's account
try {
    if (balance === 500) {  // Balance should be 500 after deposit
        console.log("Scenario 1 - balance check feature passed - valid account");
    } else {
        console.log("Scenario 1 - balance check feature failed - incorrect balance");
    }
} catch (_) {
    console.log("Scenario 1 - balance check feature failed");
}

// Scenario 2 - Balance Check Feature - Invalid Account
try {
    bnk.checkBalance("99999999999");  // Invalid account number
    console.log("Scenario 2 - balance check feature failed - invalid account not caught");
} catch (_) {
    console.log("Scenario 2 - balance check feature passed - invalid account caught");
}