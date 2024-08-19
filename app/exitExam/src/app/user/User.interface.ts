export interface User {
  id?: string,
  username?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  userType?: string;
  fieldofstudy?: string;
  isLoggedIn?: boolean,
  isAdmin?: boolean,
}
