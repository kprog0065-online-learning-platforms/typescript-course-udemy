import { User } from "./models/user";

const user = new User({ name: "John Doe", age: 30 });

user.on("greet", () => {
  console.log("Change #1");
});
user.on("greet", () => {
  console.log("Change #1");
});
user.on("save", () => {
  console.log("Save was triggered");
});

user.trigger("change");
