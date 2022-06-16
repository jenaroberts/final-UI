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
import {
  checkHabit,
  checkTask,
  createPlan,
  getPlan,
  Plan,
} from "../service/plan";
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
  const resyncPlan = async () => {
    const p = await getPlan();
    console.log(p);
    setPlan(p);
  };
  useEffect(() => {
    (async () => {
      await resyncPlan();
    })();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        {plan?.takesMeds && (
          <Typography className="medication-banner">TAKE YOUR MEDS!</Typography>
        )}
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
                            <IconButton
                              onClick={async () => {
                                const updated = await checkTask(
                                  task.name,
                                  dayOfWeek
                                );
                                setPlan(updated);
                              }}
                            >
                              {" "}
                              <DriveFileRenameOutlineOutlinedIcon />{" "}
                            </IconButton>
                            <Typography
                              className={`task-name ${
                                task.checked ? "done" : ""
                              }`}
                            >
                              {" "}
                              {task.name}{" "}
                            </Typography>
                          </ListItem>
                        );
                      })}
                  </List>
                </CardContent>
              </Card>
            );
          })}
          <Card className="habit-tracker-card">
            <CardContent className="card-content">
              <Typography className="habit-title">Habit Tracker</Typography>
              <div className="day-of-week-letter">
                {daysOfWeek.map((day) => (
                  <Typography>{day}</Typography>
                ))}
              </div>
              <div className="habits-names">
                {plan &&
                  plan.habits.map((habit) => {
                    return (
                      <>
                        <ListItem className="names-checkboxes">
                          <Typography className="habit-name">
                            {habit.name}
                          </Typography>
                          <div className="days-of-week">
                            {daysOfWeek.map((dayOfWeek) => {
                              return (
                                <Checkbox
                                  checked={(habit as any)[dayOfWeek]}
                                  onChange={async () => {
                                    const updated = await checkHabit(
                                      habit.name,
                                      dayOfWeek
                                    );
                                    setPlan(updated);
                                  }}
                                />
                              );
                            })}
                          </div>
                        </ListItem>
                      </>
                    );
                  })}
              </div>
            </CardContent>
          </Card>
          {!!user && (
            <button
              className="logout-button"
              onClick={async () => {
                await signOut(auth);
                navigate("/");
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
