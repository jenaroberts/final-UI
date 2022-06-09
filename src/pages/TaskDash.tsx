import { Card, CardContent, Typography } from "@mui/material";

export const Dash = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="card-container">
          <Card className="week-day-card">
            <CardContent>
              <Typography variant="h2" component="div" className="card-title">
                M
              </Typography>
              <Typography variant="body2">
                Task 1
                <br />
                Task 2
                <br />
                Task 3
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card className="week-day-card">
            <CardContent>
              <Typography variant="h2" component="div" className="card-title">
                T
              </Typography>
              <Typography variant="body2">
                Task 1
                <br />
                Task 2
                <br />
                Task 3
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card className="week-day-card">
            <CardContent>
              <Typography variant="h2" component="div" className="card-title">
                W
              </Typography>
              <Typography variant="body2">
                Task 1
                <br />
                Task 2
                <br />
                Task 3
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card className="week-day-card">
            <CardContent>
              <Typography variant="h2" component="div" className="card-title">
                Th
              </Typography>
              <Typography variant="body2">
                Task 1
                <br />
                Task 2
                <br />
                Task 3
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card className="week-day-card">
            <CardContent>
              <Typography variant="h2" component="div" className="card-title">
                F
              </Typography>
              <Typography variant="body2">
                Task 1
                <br />
                Task 2
                <br />
                Task 3
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card className="week-day-card">
            <CardContent>
              <Typography variant="h2" component="div" className="card-title">
                Sa
              </Typography>
              <Typography variant="body2">
                Task 1
                <br />
                Task 2
                <br />
                Task 3
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card className="week-day-card">
            <CardContent>
              <Typography variant="h2" component="div" className="card-title">
                Su
              </Typography>
              <Typography variant="body2">
                Task 1
                <br />
                Task 2
                <br />
                Task 3
                <br />
              </Typography>
            </CardContent>
          </Card>
          <Card className="inputs">
            <CardContent>
              <Typography variant="h5" className="input-title">
                Habit Tracker
                <br />
              </Typography>
              <Typography className="input-items">
                input1input1input1input1input1
                <br />
                <br />
                input2input2input2input2input2
                <br />
                <br />
                input3input3input3input3input3
                <br />
                <br />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
