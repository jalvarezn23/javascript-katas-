const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const onlyVegan = (foodSchedule, fruits) => {
    for(let i = 0; i < foodSchedule.length; i++){
        if (!foodSchedule[i].isVegan) {
            foodSchedule[i] = { name: fruits[i % fruits.length], isVegan: true };
        }
    }
    return foodSchedule;
};

const result = onlyVegan(foodSchedule, fruits);
console.log(result);