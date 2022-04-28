import { RevalidateAuthResponse, SigninResponse } from "../interfaces/auth-responses";
import { User } from "../interfaces/user-slice";

export const transformToUser = 
  ( response: SigninResponse | RevalidateAuthResponse): User => {
    return {
      uid: response.person.uid,
      name: response.person.name,
      role: response.person.role.name,
    }
}