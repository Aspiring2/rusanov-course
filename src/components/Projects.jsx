import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project 1',
      image: 'https://via.placeholder.com/300',
      description: 'This is project 1.',
    },
    {
      id: 2,
      name: 'Project 2',
      image: 'https://via.placeholder.com/300',
      description: 'This is project 2.',
    },
    {
      id: 3,
      name: 'Project 3',
      image: 'https://via.placeholder.com/300',
      description: 'This is project 3.',
    },
  ]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardHeader title={project.name} />
              <CardMedia component="img" height="0" image={project.image} alt={project.name} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} to={`/projects/${project.id}`} size="small">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
