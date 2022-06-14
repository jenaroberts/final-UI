import { Chip, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useState } from "react";

import { createPlan, PlanRequest } from "../service/plan";
import { useNavigate } from "react-router";

const tasks = [
  "Wash Sheets",
  "Wash Towels",
  "Clean Bathrooms",
  "Dust",
  "Grocery Shop",
  "Organize Pantry",
  "Wash Darks",
  "Wash Lights",
  "Sweep/Mop Floors",
  "Clean Kitchen",
  "Clean Out Fridge",
  "Clean Bedrooms",
  "Clean Baseboards",
  "Vacuum Carpets",
  "Wash Bath Mats",
  "Clean Cars",
  "Run Errands",
  "Take A Walk",
  "Clean Appliances",
  "Vacuum Couch",
  "Organize Kids Toys",
];

export const TaskPage = () => {
  const [plan, setPlan] = useState<PlanRequest>({
    takesMeds: false,
    habits: [],
    tasks: [],
  });
  const [habit1, setHabit1] = useState("");
  const [habit2, setHabit2] = useState("");
  const [habit3, setHabit3] = useState("");
  const navigate = useNavigate();
  console.log(plan);

  return (
    <>
      <div className="task-page-container">
        <div className="switch">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  value={plan.takesMeds}
                  onChange={() =>
                    setPlan({ ...plan, takesMeds: !plan.takesMeds })
                  }
                />
              }
              label="Do you take daily medication?"
            />
          </FormGroup>
        </div>
        <div className="chip-container">
          {tasks.map((task) => {
            const isActive = plan.tasks.includes(task);
            return (
              <Chip
                clickable
                label={task}
                variant={isActive ? "filled" : "outlined"}
                color="primary"
                onClick={() => {
                  if (isActive) {
                    plan.tasks.splice(plan.tasks.indexOf(task), 1);
                  } else {
                    plan.tasks.push(task);
                  }
                  setPlan({ ...plan });
                }}
              />
            );
          })}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="habit 1"
            value={habit1}
            onChange={(e) => setHabit1(e.target.value)}
          />
          <input
            type="text"
            placeholder="habit 2"
            value={habit2}
            onChange={(e) => setHabit2(e.target.value)}
          />
          <input
            type="text"
            placeholder="habit 3"
            value={habit3}
            onChange={(e) => setHabit3(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button
            className="button"
            onClick={async (e) => {
              plan.habits = [habit1, habit2, habit3];
              await createPlan(plan);
              navigate("/dashboard");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
