const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

const getUsersAge = (users) => {
    const younger = [];
    const older = [];

    for (const user of users){
        if (user.years < 18){
            younger.push(user); 
        } else if (user.years >= 18){
            older.push(user);
        }
    }
    return {younger, older};
};

const result = getUsersAge(users);
console.log(result);