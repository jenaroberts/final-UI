import { Chip, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useState } from "react";
import { Plan, PlanRequest } from "../service/plan";

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

  return (
    <>
      <div className="task-page-container">
        <div className="switch">
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Do you take daily medication?"
            />
          </FormGroup>
        </div>
        <div className="chip-container">
          {tasks.map((task) => (
            <Chip label={task} variant="outlined" />
          ))}
        </div>
        <div className="input-container">
          <input type="text" placeholder="habit 1" />
          <input type="text" placeholder="habit 2" />
          <input type="text" placeholder="habit 3" />
        </div>
        <div className="button-container">
          <button className="button">Submit</button>
        </div>
      </div>
    </>
  );
};
