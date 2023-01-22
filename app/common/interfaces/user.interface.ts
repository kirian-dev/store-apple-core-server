export interface IUser {
  name: string;
  email: string;
  password: string;
  role?: string;
  _id: string;
} 

export interface ILogin {
  user: {};
  refreshToken: string;
  accessToken: string;
}