let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegisteredRunner = true;
let runnersAge = 8;

if (runnersAge > 18 && earlyRegisteredRunner === true) {
    raceNumber += 1000;
}

if (runnersAge > 18 && earlyRegisteredRunner === true) {
  console.log(`You will begin your race at 9:30am with your race number: ${raceNumber}!`);
} else if (runnersAge > 18 && earlyRegisteredRunner === false) {
  console.log(`You will begin your race at 11:00am with your race number: ${raceNumber}!`);
} else if (runnersAge < 18) {
  console.log(`You will begin your race at 12:30am with your race number: ${raceNumber}!`);
} else {
  console.log("Please see the registration desk.");
}