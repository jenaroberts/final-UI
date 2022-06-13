import { UserContext } from "../context/UserContext";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { createPlan, getPlan, Plan } from "../service/plan";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import { TaskPage } from "./TaskPage";
import { Task } from "@mui/icons-material";
const daysOfWeek = ["m", "t", "w", "th", "f", "sa", "su"];

export const Dash = () => {
  const { Provider } = UserContext;
  const [plan, setPlan] = useState<Plan>();
  useEffect(() => {
    (async () => {
      const p = await getPlan();
      console.log(p);
      setPlan(p);
    })();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <div className="card-container">
          {daysOfWeek.map((dayOfWeek: any) => {
            return (
              <Card className="week-day-card">
                <CardContent>
                  <Typography variant="h2" className="card-title">
                    {dayOfWeek}
                  </Typography>
                  <List>
                    {plan &&
                      (plan as any)[dayOfWeek].map((task: any) => {
                        return (
                          <ListItem className="clicked-tasks">
                            <DriveFileRenameOutlineOutlinedIcon />
                            {task.name}
                          </ListItem>
                        );
                      })}
                  </List>
                </CardContent>
              </Card>
            );
          })}
          <Card className="habit-tracker-card">
            <CardContent>
              <Typography variant="h5" className="input-title">
                Habit Tracker
              </Typography>
              <List>
                {plan &&
                  (plan as any).habits.map((task: any) => {
                    return (
                      <>
                        <ListItem className="clicked-tasks">
                          {plan?.habits}
                        </ListItem>
                      </>
                    );
                  })}
              </List>
            </CardContent>
          </Card>
          <Button className="logout-button">Log Out</Button>
          <ResetTvIcon />
        </div>
      </div>
    </>
  );
};
