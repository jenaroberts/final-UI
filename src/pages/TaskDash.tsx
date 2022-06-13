import { Card, CardContent, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getPlan, Plan } from "../service/plan";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
const daysOfWeek = ["m", "t", "w", "th", "f", "sa", "su"];
const habits = ["habit1", "habit2", "habit3"];

export const Dash = () => {
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
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
