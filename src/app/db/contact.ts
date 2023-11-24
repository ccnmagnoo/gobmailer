import Institution from './Institution';
import Territory from './Territory';
import contact from './contact.json';
import Scope from './scope';

//base Contact structure
type ContactStruct = {
  name: string;
  position: string;
  institution: Institution;
  scope: Scope;
  territory: Territory;
  email: string;
  phone: number;
  movil: number;
  address: string;
  city: string;
};

//nullable values as Partial<> but for Nulls instead
export type Nullable<TYPE> = {
  [KEY in keyof TYPE]: TYPE[KEY] extends string | number ? TYPE[KEY] | null : TYPE[KEY];
};

//Contact data income with json
export type ContactJson = Nullable<ContactStruct>;

//db with contacts
const data = contact as ContactJson[];
