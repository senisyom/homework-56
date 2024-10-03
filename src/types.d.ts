export interface IUser {
  id: string;
  name: string;
  emeil: string;
  active: boolean;
}

export interface IUserMutation {
  name: string;
  email: string;
}
