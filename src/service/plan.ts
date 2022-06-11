import axios from "axios";
import { getAuth } from "firebase/auth";
export interface Task {
  name: string;
  checked: boolean;
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
  habits: string[];
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
    baseURL: "localhost:5050",
    headers: {
      authorization: jwt!,
    },
  });
};

export const createPlan = async (plan: Plan) => {
  const client = await getClient();
  await client.post("/plan", plan);
};
