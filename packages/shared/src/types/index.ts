export enum EnumRole {
  admin = 'ADMIN',
  user = 'USER',
  manager = 'MANGER',
}

export type TypeUser = {
  id: number;
  theme: string;
  role: EnumRole;
  name: string;
  email: string;
};
