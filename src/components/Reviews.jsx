import React from 'react';
import { Container, Typography } from '@mui/material';
import Review from './Review';

function Reviews() {
  const reviews = [
    { id: 1, author: 'John', text: 'Great service!', rating: 5 },
    { id: 2, author: 'Jane', text: 'Excellent work!', rating: 4 },
    { id: 3, author: 'Joe', text: 'Highly recommended!', rating: 5 },
  ];

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Reviews
      </Typography>
      {reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </Container>
  );
}

export default Reviews;
