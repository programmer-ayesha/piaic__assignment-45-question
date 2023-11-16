// write usernames
var user_names = ['alisha', 'aqsa', 'fizza', 'saqlain', 'shahzad'];
// the list of users is not empty
if (usernames.length > 0) {
    // greetings
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users.");
}
// Remove all usernames
user_names = [];
// the list of users is not empty
if (usernames.length > 0) {
    // greetings
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users.");
}
