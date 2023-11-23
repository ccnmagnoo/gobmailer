import contact from './contact.json';

const [data] = contact;

type Scope = typeof data['scope'] as const;
type Territory = (typeof data)['territory'];
type Institution = (typeof data)['institution'];

type Contact = {
  name: string;
  position: string;
  institution: Institution;
  scope: Scope;
  territory: Territory;
  email: null | number;
  phone: null | number;
  movil: null | number;
  address: string;
  city: string;
};
