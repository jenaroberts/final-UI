import { Chip } from "@mui/material";

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
  return (
    <>
      <div className="chip-container">
        {tasks.map((task) => (
          <Chip label={task} variant="outlined" />
        ))}
      </div>
      <div className="button-container">
        <button className="button">Submit</button>
      </div>
    </>
  );
};
