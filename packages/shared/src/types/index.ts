export enum EnumRole {
  admin = 'ADMIN',
  user = 'USER',
  manager = 'MANAGER',
}

export type TypeUser = {
  id: number;
  theme: string;
  role: EnumRole;
  name: string;
  email: string;
};

declare global {
  interface Window {
    host: {
      common: {
        user: TypeUser;
      };
    };
  }
}
