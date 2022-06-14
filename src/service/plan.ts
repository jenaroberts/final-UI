import axios from "axios";
import { getAuth } from "firebase/auth";
export interface Task {
  name: string;
  checked: boolean;
}

export interface PlanHabit {
  name: string;
  m: boolean;
  t: boolean;
  w: boolean;
  th: boolean;
  f: boolean;
  sa: boolean;
  su: boolean;
}
export interface Plan {
  m: Task[];
  t: Task[];
  w: Task[];
  th: Task[];
  f: Task[];
  sa: Task[];
  su: Task[];
  userId: string;
  habits: PlanHabit[];
  createdAt: Date;
  takesMeds: boolean;
  isActive: boolean;
}

export interface PlanRequest {
  takesMeds: boolean;
  habits: string[];
  tasks: string[];
}

const getClient = async () => {
  const auth = getAuth();
  const jwt = await auth.currentUser?.getIdToken();
  return axios.create({
    baseURL: "http://localhost:5050",
    headers: {
      authorization: jwt!,
    },
  });
};

export const createPlan = async (plan: PlanRequest) => {
  const client = await getClient();
  await client.post("/plan", plan);
};

export const getPlan = async () => {
  const client = await getClient();
  const ret = await client.get("/plan");
  return ret.data as Plan;
};

export const checkHabit = async (habitName: string, day: string) => {
  const client = await getClient();
  await client.post("/plan/habits", { habitName, day });
};
