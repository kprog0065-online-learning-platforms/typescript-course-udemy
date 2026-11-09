import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  // const id = todo.id;
  // const title = todo.title;
  // const completed = todo.completed;

  // logTodo(id, title, completed);
  logTodo(todo);
});

// const logTodo = (id: number, title: string, completed: boolean) => {
//   console.log(`The Todo with ID: ${id}
//     Has a title of: ${title}
//     Is it finished? ${completed}
//   `);

// Object Destructuring cleaner way to write the above function
const logTodo = ({ id, title, completed }: Todo): void => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
