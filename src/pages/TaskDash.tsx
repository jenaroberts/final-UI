import { UserContext } from "../context/UserContext";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { createPlan, getPlan, Plan } from "../service/plan";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import { useNavigate } from "react-router";
import { TaskPage } from "./TaskPage";
import { Task } from "@mui/icons-material";
const daysOfWeek = ["m", "t", "w", "th", "f", "sa", "su"];

export const Dash = () => {
  const { user } = useContext(UserContext);
  const [plan, setPlan] = useState<Plan>();
  const auth = getAuth();
  const navigate = useNavigate();
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
              <div className="habit-day-week-container">
                {" "}
                {daysOfWeek.map((day) => (
                  <Typography className="day-of-week-habits">{day}</Typography>
                ))}
              </div>
              <List>
                {plan &&
                  plan.habits.map((habit) => {
                    return (
                      <>
                        <ListItem className="clicked-tasks">
                          <Typography>{habit.name}</Typography>
                          {daysOfWeek.map((dayOfWeek) => {
                            return <Checkbox />;
                          })}
                        </ListItem>
                      </>
                    );
                  })}
              </List>
            </CardContent>
          </Card>
          {!!user && (
            <button
              className="logout-button"
              onClick={async () => {
                await signOut(auth);
                navigate("/home");
              }}
            >
              Log Out
            </button>
          )}
          <IconButton onClick={() => navigate("/taskPage")}>
            <ResetTvIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
