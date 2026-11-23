import { User } from "./models/user";

const user = new User({ name: "John Doe", age: 30 });

console.log(user.get("name")); // Output: John Doe
console.log(user.get("age"));  // Output: 30

user.set({ name: "Jane Doe", age: 25 });

console.log(user.get("name")); // Output: Jane Doe
console.log(user.get("age"));  // Output: 25