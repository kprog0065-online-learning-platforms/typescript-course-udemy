import { CustomMap } from './CustomMap';
import { User } from './User';

new CustomMap('map');

const user = new User();
const customMap = new CustomMap('map');

customMap.addUserMarker(user);


