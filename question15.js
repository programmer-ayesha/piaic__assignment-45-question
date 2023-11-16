//guest list 
var guestlist = ["razia", "mahnoor", "sabia"];
//write invitation message
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("dear ".concat(guest, ",you are invited to lunch"));
}
// new invitation
var guestCantMakeIt = "mahnoor";
var newInvitee = "saqlain";
//write the person name who can't make it
console.log("\nUnfortunately, ".concat(guestCantMakeIt, " can't make it to the lunch.\n"));
// replace the person name who can't make it with a new invite
var indexToRemove = guestlist.indexOf(guestCantMakeIt);
if (indexToRemove !== -1) {
    guestlist.splice(indexToRemove, 1, newInvitee);
}
//write the update invitation message
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("dear ".concat(guest, ", you are invited to lunch"));
}
