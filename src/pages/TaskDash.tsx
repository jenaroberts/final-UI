import { Card, CardContent, Typography } from "@mui/material";

export const Dash = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="card-container">
          <div className="week-day-card">
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  be
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
