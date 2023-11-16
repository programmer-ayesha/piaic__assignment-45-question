//original guest list
const originalGuestList: string[] = [
    "humza", 
    "usman",
    "huzaifa",
];
//dinner invitation
function generateInvitations(guest: string[]): string[] {
    return guest.map((guest) => `dear ${guest}, you are invited to dinner`);
}

//guest invited
const originalInvitation: string[] = generateInvitations(originalGuestList);

//write original invitation
originalInvitation.forEach((invitation) => console.log(invitation));

//guest not being able to make it
const guestNotAvailable = "iqra";
console.log(`${guestNotAvailable} can not make it to dinner `);

//replace the unavailable guest with a new guest
const updateGuestList = originalGuestList.map((guest) =>
guest === guestNotAvailable ? "bisma" : guest
);

//inform all new guest to a biggest dinner table
console.log("welcom all , we found a bigger dinner table!");

// add new guest bigining of the array
updateGuestList.unshift("halima");

//add neew guest middle if the array
const middleIndex = Math.floor(updateGuestList.length / 2);

//add new one guest one of the list
updateGuestList.push("suman");

//write new invitation
const newInvitations: string[] = generateInvitations(updateGuestList);

//write update invitation
newInvitations.forEach((invitation) => console.log(invitation));