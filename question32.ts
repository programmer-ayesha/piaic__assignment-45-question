// list of current users
const currentUsers: string[] = ['tariq', 'sheroz', 'hania', 'nadeem', 'ukasha'];

// list of new users
const newUsers: string[] = ['rizwan', 'aliyan', 'subhan', 'ukasha', 'hania'];


for (let newUser of newUsers) {
  // Convert both usernames to lowercase 

  const lowercaseNewUser = newUser.toLowerCase();
  const isUnique = !currentUsers.some((currentUser) => currentUser.toLowerCase() === lowercaseNewUser);

  // write a message of unique name
  
  if (isUnique) {
    console.log(`Username '${newUser}' is available.`);
  } else {
    console.log(`Sorry, the username '${newUser}' Kindly choose another username as the one entered is already taken. .`);
  }
}