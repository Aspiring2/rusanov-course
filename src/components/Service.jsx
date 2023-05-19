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

function Service(props) {
    const service = props.service
    console.log(service)
return (
<>
    <CardHeader title={service.title} />
    <CardContent>
        <Typography variant="body2" color="text.secondary">
        {service.text}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
            Tags: {service.tags && service.tags.join(', ')}
        </Typography>

        <Typography variant="caption" color="text.secondary">
        Views: {service.viewsCount}
        </Typography>
    </CardContent>
    <CardActions>
        
    </CardActions>
</>
)
}

export default Service




