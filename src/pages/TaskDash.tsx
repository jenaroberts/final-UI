import { Card, CardContent, Typography } from "@mui/material";

export const Dash = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="card-container">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography gutterBottom>Task 1</Typography>{" "}
              <Typography gutterBottom>Task 2</Typography>
              <Typography gutterBottom>Task 3</Typography>
            </CardContent>{" "}
          </Card>
        </div>
      </div>
    </>
  );
};
