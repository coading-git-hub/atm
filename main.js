import inquirer from "inquirer";
let myBalance = 10000;
console.log("your currunt balance is:" + myBalance); //Dollar
let myPin = 2611;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct your pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdrow", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdrow") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "check balance")
        console.log("your balance is:" + myBalance);
}
else {
    console.log("Incorrect pin Code");
}
