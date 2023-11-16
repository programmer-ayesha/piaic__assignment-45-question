// write usernames
let usernames: string[] = ['alisha', 'aqsa', 'fizza', 'saqlain', 'shahzad'];

// the list of users is not empty
if (usernames.length > 0) {
  // greetings
  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];

    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users.");
}

// Remove all usernames
usernames = [];

// the list of users is not empty
if (usernames.length > 0) {
  // greetings 
  for (let i = 0; i < usernames.length; i++) {
    const username = usernames[i];

    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users.");
}