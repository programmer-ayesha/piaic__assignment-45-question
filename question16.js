//original guest list
var originalGuestList = [
    "humza",
    "usman",
    "huzaifa",
];
//dinner invitation
function generateInvitations(guest) {
    return guest.map(function (guest) { return "dear ".concat(guest, ", you are invited to dinner"); });
}
//guest invited
var originalInvitation = generateInvitations(originalGuestList);
//write original invitation
originalInvitation.forEach(function (invitation) { return console.log(invitation); });
//guest not being able to make it
var guestNotAvailable = "iqra";
console.log("".concat(guestNotAvailable, " can not make it to dinner "));
//replace the unavailable guest with a new guest
var updateGuestList = originalGuestList.map(function (guest) {
    return guest === guestNotAvailable ? "bisma" : guest;
});
//inform all new guest to a biggest dinner table
console.log("welcom all , we found a bigger dinner table!");
// add new guest bigining of the array
updateGuestList.unshift("halima");
//add neew guest middle if the array
var middleIndex = Math.floor(updateGuestList.length / 2);
//add new one guest one of the list
updateGuestList.push("suman");
//write new invitation
var newInvitations = generateInvitations(updateGuestList);
//write update invitation
newInvitations.forEach(function (invitation) { return console.log(invitation); });
