export type User = {
  name: string;
  age?: number;
  email: string;
  isAdmin: boolean;
  password?: string;
};
export type Role = "admin" | "user" | "guest";
export type UserWithRole = User & {
  role: Role;
};
/**
 * Area can be found with the formula:
 * - Circle: π * radius^2
 */
export type Circle = {
  kind: "circle";
  radius: number;
};
/**
 * Area can be found with the formula:
 * - Rectangle: width * height
 */
export type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};
/**
 * Area can be found with the formula:
 * - Square: side^2
 */
export type Square = {
  kind: "square";
  side: number;
};
export type Shape = Circle | Rectangle | Square;
type Loading = { status: "loading" };
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };
export type Result = Loading | Success | Error;
