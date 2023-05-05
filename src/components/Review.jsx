import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';

function Review({ author, text, rating }) {
  return (
    <Card>
      <CardHeader title={`Review by ${author}`} subheader={`Rating: ${rating}/5`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Review;
