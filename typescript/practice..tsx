interface User {
  name: string;
  class: number;
}

interface Admin extends User {
  school: string;
}

type ButtonStatus = "success" | "failed" | "pending";

const button: number | string = 3;

type PartialUser = Partial<User>;

const theName: [string, number] = ["ade", 2];

function add(x: number, y: number): number {
  return x + y;
}

const greet = (day: string, name: string): string => {
  return `${day}`;
};
