import { User } from './models/user';

const user = new User({ id: 1 });

user.set({ name: 'John Doey', age: 36 });

user.save();

