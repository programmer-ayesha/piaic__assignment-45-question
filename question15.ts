//guest list 
const guestlist: string[] = ["razia", "mahnoor", "sabia"];

//write invitation message
for ( const guest of guestlist) {
    console.log(`dear ${guest},you are invited to dinner`)
}

// new invitation
const guestCantMakeIt: string = "mahnoor";
const newInvitee: string = "saqlain"

//write the person name who can't make it
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.\n`);

// replace the person name who can't make it with a new invite
const indexToRemove: number = guestlist.indexOf(guestCantMakeIt);
if (indexToRemove !== -1) {
    guestlist.splice(indexToRemove, 1, newInvitee)
}
//write the update invitation message
for (const guest of guestlist) {
    console.log(`dear ${guest}, you are invited to dinner`);
}