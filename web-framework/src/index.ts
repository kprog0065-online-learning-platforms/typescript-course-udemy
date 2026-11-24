import { User } from './models/user';

const user = new User({ id: 1 });

user.fetch();

setTimeout(() => {
  console.log(user.get('name'));
}, 1000);

