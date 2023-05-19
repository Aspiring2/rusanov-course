// BlogPostDetails.jsx
import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { fetchPosts } from '../redux/slices/posts'
import { Link } from 'react-router-dom'

function BlogPost(props) {
    const post = props.post
    console.log(post)
return (
<>
    <CardHeader title={post.title} />
    <CardContent>
        <Typography variant="body2" color="text.secondary">
        {post.text}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            Tags: {post.tags && post.tags.join(', ')}
        </Typography>

        <Typography variant="caption" color="text.secondary">
        Views: {post.viewsCount}
        </Typography>
    </CardContent>
    <CardActions>
        
    </CardActions>
</>
)
}

export default BlogPost




