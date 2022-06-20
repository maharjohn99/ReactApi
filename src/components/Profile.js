import * as React from "react";
import Card from "@mui/material/Card";
import pic from "../static/john.jpg";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia
        component="img"
        height="500"
        width="140"
        image={pic}
        alt="john"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JOHN MAHARJAN
        </Typography>
        <Typography variant="body2" color="text.secondary">
         HELLO! I AM A PROGRAMMER. THANK YOU!
        </Typography>
        <Typography variant="body2" color="text.secondary">
         EBP-465
        </Typography>
      </CardContent>
    </Card>
  );
}