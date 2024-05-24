import type { User } from "@/types/User";
import { httpClient as http } from "./http";

type SignInParams = {
  email: string;
  password: string;
};


class AuthService {
  private endpoint: string = '/auth'
  constructor() { }

  signin(params: SignInParams): Promise<User> {
    return http.post(`${this.endpoint}/signin`, {
      email: params.email,
      password: params.password
    });
  }

  googleAuth(): Promise<User> {
    return http.get(`${this.endpoint}/google`);
  }

}
const authService = new AuthService()

export default authService