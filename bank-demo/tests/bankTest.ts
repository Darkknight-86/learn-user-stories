import Bank from '../src/bank';

//Setup
const bnk = new Bank();

//scencario 1
const account = bnk.createAccount("John Doe", 29, "1002304000");
if (account.accountNumber == "1002304000") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

//scencario 2
try {
    bnk.createAccount("John Doe", 29, "1002304000");
    console.log("Scenario 2 failed");
}catch(_){
    console.log("Scenario 2 passed");
}