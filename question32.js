// list of current users
var currentUsers = ['tariq', 'sheroz', 'hania', 'nadeem', 'ukasha'];
// list of new users
var newUsers = ['rizwan', 'aliyan', 'subhan', 'ukasha', 'hania'];
var _loop_1 = function (newUser) {
    // Convert both usernames to lowercase 
    var lowercaseNewUser = newUser.toLowerCase();
    var isUnique = !currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === lowercaseNewUser; });
    // write a message of unique name
    if (isUnique) {
        console.log("Username '".concat(newUser, "' is available."));
    }
    else {
        console.log("Sorry, the username '".concat(newUser, "' Kindly choose another username as the one entered is already taken. ."));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
