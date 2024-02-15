export type TRole = "CEO" | "HR" | "Employee";
export type TGender = "Male" | "Female";

export type TEmployee = {
  name: string;
  id: number;
  role: TRole;
  salary: number;
  gender: TGender;
};

export const CEO: TEmployee = {
  name: "Vikil Lakkavatri",
  id: 1,
  salary: 10000000,
  role: "CEO",
  gender: "Male",
};
