//original guest list
var originalGuestList = ["razia", "mhanoor", "sabia", "alina"];
// generate dinner invitations
function generateInvitations(guests) {
    return guests.map(function (guest) { return "Dear ".concat(guest, ", you all member are invited at dinner!"); });
}
//invited original guests
var originalInvitations = generateInvitations(originalGuestList);
// generate original invitations
originalInvitations.forEach(function (invitation) { return console.log(invitation); });
// inform how many people come to at dinner
console.log("We are inviting ".concat(originalGuestList.length, " people to dinner."));
