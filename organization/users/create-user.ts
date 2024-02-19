import { TEmployee } from "../types";
import { Staff } from "./Staff";
export const createUser = ({ ...employee }: TEmployee) =>
  new Staff(
    employee.id,
    employee.name,
    employee.gender,
    employee.role,
    employee.salary
  );
