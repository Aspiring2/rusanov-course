import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { fetchPosts } from '../redux/slices/posts'
import CardContent from '@mui/material/CardContent'
import serviceData from '../assets/data/serviceData.json'
import BlogPost from '../components/BlogPost'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

function FullPost() {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)
  const id = useParams()

  React.useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
console.log(id)
console.log(id.postId)
  const post = posts.items.find(p => p._id === id.postId)
  const services = serviceData.services
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Blog
      </Typography>
      {post && <>
      <Card key={post._id} sx={{ mb: 2 }}>
					<BlogPost post={post}/>
          <Button component={Link} to={`/blog`} size="small">
			      Back
		      </Button>
			</Card>	
      </>}
    </Container>
  )
}

export default FullPost
