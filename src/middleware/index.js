import { auth } from "./Authenticate";
import { permission } from "./authorization";

export const middlewares = [
  auth,
  permission
]
