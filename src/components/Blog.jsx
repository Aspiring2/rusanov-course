import { useEffect, useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/blog')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={4} alignItems="stretch">
        {blogPosts.map(blogPost => (
          <Grid item xs={12} sm={6} md={4} key={blogPost._id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href={`/blog/${blogPost._id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={blogPost.imageUrl}
                  alt={blogPost.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blogPost.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blogPost.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
