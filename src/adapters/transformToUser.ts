import { RevalidateAuthResponse, SigninResponse } from "../models/auth-responses";
import { User } from "../models/others";

export const transformToUser = 
  ( response: SigninResponse | RevalidateAuthResponse): User => {
    return {
      uid: response.person.uid,
      name: response.person.name,
      role: response.person.role.name,
    }
}