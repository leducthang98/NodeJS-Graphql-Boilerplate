import { authenticateMiddleware } from "./authenticate";

export const middlewares = [
    authenticateMiddleware,
  ]
  