import HouseTrait from "./HouseTrait";
import HouseHead from "./HouseHead";

interface House {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: HouseHead[];
  traits: HouseTrait[];
}

export default House;
