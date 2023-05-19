import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import serviceData from '../assets/data/serviceData.json'

import BlogPost from '../components/BlogPost'

import axios from '../axios';
import { fetchPosts } from '../redux/slices/posts'


function Blog() {
	const services = serviceData.services
	const dispatch = useDispatch()
	const {posts, tags} = useSelector(state => state.posts)

	const isPostLoading = posts.status === 'loading'
console.log()
	React.useEffect(() => {
		dispatch(fetchPosts())
	  }, [])

	return (
		<Container maxWidth="sm">
			<Typography variant="h4" component="h1" gutterBottom>
				Blog
			</Typography>
			{(isPostLoading ? services : posts.items).map((service, index) => (
				<>
				<Card key={service._id} sx={{ mb: 2 }}>
					<BlogPost post={service}/>
					<Button component={Link} to={`/blog/${service._id}`} size="small">
						Learn More
					</Button>
				</Card>		
				
				</>
			))}
		</Container>
	)
}

export default Blog
