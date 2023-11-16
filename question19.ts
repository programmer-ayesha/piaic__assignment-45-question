//original guest list
const originalGuestList: string[] = ["razia", "mhanoor", "sabia", "alina"];

 // generate dinner invitations
 function generateInvitations(guests: string[]): string[] {
    return guests.map((guest) => `hello ${guest}, you all member are invited at dinner!`);
  }
//invited original guests
  const originalInvitations: string[] = generateInvitations(originalGuestList);

  // generate original invitations
  originalInvitations.forEach((invitation) => console.log(invitation));

   // inform how many people come to at dinner
   console.log(`We are inviting ${originalGuestList.length} people to dinner.`);

