import { User } from "./User";
import { Company } from "./Company";

declare const google: any;

(window as any).initMap = () => {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 43.6532, lng: -79.3832 },
      zoom: 12,
    }
  );
};

const user = new User();
console.log(user);

const company = new Company();
console.log(company);
