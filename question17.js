var guest_List = ["alisha", "aqsa", "fizza", "saqlain", "hifza"];
for (var _i = 0, guest_List_1 = guest_List; _i < guest_List_1.length; _i++) {
    var guest = guest_List_1[_i];
    console.log("Dear ".concat(guest, ", \n\tyour are invited to a dinner. i want to you join us !\n sincerely ,[ayesha shahzad]"));
}
console.log("\n wonderfull news ! we found a bigger dinner table!\n");
//new guest
var new_Guests = ["sajida", "amna"];
guest_List.unshift(new_Guests[0]);
guest_List.splice(Math.floor(guest_List.length / 2), 0, new_Guests[1]);
guest_List.push("amna");
//invitation to all person 
for (var _a = 0, guest_List_2 = guest_List; _a < guest_List_2.length; _a++) {
    var guest = guest_List_2[_a];
    console.log("dear ".concat(guest, ",\n\t you are invited to a dinner. i want to you join us !\n sincerely ,[ayesha shahzad]"));
}
console.log("\nUnfortunately, NEW dinner table and we want you to arrive at time, and we have only invite two people for dinner.\n");
while (guest_List.length > 2) {
    var removedGuest = guest_List.pop();
    console.log("Sorry, ".concat(removedGuest, ", we don't have  invite you to dinner."));
}
for (var _b = 0, guest_List_3 = guest_List; _b < guest_List_3.length; _b++) {
    var remainingGuest = guest_List_3[_b];
    console.log("Dear ".concat(remainingGuest, ",\n\tYou're still invited to dinner. We look forward to seeing you!\nSincerely, [ayesha shahzad ]"));
}
