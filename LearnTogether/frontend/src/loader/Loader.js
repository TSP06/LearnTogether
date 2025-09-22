import * as React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Avatar,
    Typography,
    IconButton
} from "@mui/material";
import { Skeleton } from "@mui/material"; 
import MoreVertIcon from '@mui/icons-material/MoreVert';
 
 

function Media() {
  const loading=true;

  return (
    <>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </>
  );
}

export default Media;