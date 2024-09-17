import Bank from '../src/bank';

//Setup
const bnk = new Bank();

//scencario 1 - bank account story
const account = bnk.createAccount("John Doe", 29, "1002304000");
if (account.accountNumber == "1002304000") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

//scenario 2 - bank account story
try {
    bnk.createAccount("John Doe", 29, "1002304000");
    console.log("Scenario 2 failed");
}catch(_){
    console.log("Scenario 2 passed");
}

// Scenario 1 - Deposit Feature Successful Deposit
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

// Scenario 2 - Deposit Feature Invalid Account
try {
    bnk.deposit("99999999999", 500);  // Deposit in an invalid account
    console.log("Scenario 2 - deposit feature failed - valid account");
} catch (_) {
    console.log("Scenario 2 - deposit feature passed - invalid account caught");
}

// Scenario 3 - Deposit Feature Negative Amount
try {
    bnk.deposit("1002304001", -500);  // Deposit negative amount
    console.log("Scenario 3 - deposit feature failed - positive amount");
} catch (_) {
    console.log("Scenario 3 - deposit feature passed - negative amount caught");
}
