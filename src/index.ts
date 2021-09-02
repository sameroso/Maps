/// <reference types="@types/google.maps" />

import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const customMap = new CustomMap("map");
const company = new Company();
const user = new User();

customMap.addMarker(user);
customMap.addMarker(company);
