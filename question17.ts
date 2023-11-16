let guest_List: string [] = [ "alisha", "aqsa", "fizza", "saqlain", "hifza"];

for(const guest of guest_List) {
 console.log(`Dear ${guest}, \n\tyour are invited to a dinner. i want to you join us !\n sincerely ,[ayesha shahzad]`);

}


console.log("\n wonderfull news ! we found a bigger dinner table!\n");

//new guest
const new_Guests: string[] = ["sajida","amna"];
guest_List.unshift(new_Guests[0]);
guest_List.splice(Math.floor(guest_List.length / 2), 0, new_Guests[1]);
guest_List.push("amna");

//invitation to all person 
for (const guest of guest_List) {
    console.log(`dear ${guest},\n\t you are invited to a dinner. i want to you join us !\n sincerely ,[ayesha shahzad]`)

}
console.log("\nUnfortunately, NEW dinner table and we want you to arrive at time, and we have only invite two people for dinner.\n");

while (guest_List.length > 2) {
    const removedGuest = guest_List.pop();
    console.log(`Sorry, ${removedGuest}, we don't have  invite you to dinner.`);
}

for (const remainingGuest of guest_List) {
    console.log(`Dear ${remainingGuest},\n\tYou're still invited to dinner. We look forward to seeing you!\nSincerely, [ayesha shahzad ]`);
}