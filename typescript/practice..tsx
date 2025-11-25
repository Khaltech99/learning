interface User {
  name: string;
  class: number;
}

interface Admin extends User {
  school: string;
}

type ButtonStatus = "success" | "failed" | "pending";

const button: number | string = 9;

type PartialUser = Partial<User>;

const theName: [string, number] = ["ade", 2];
