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

import Service from '../components/Service'

import axios from '../axios';
import { fetchServices } from '../redux/slices/services'


function Services() {
	const servicesPre = serviceData.services
	const dispatch = useDispatch()
	const {services, tags} = useSelector(state => state.services)

	const isPostLoading = services.status === 'loading'
console.log()
	React.useEffect(() => {
		dispatch(fetchServices())
	  }, [])

	return (
		<Container maxWidth="sm">
			<Typography variant="h4" component="h1" gutterBottom>
				Services
			</Typography>
			{(isPostLoading ? servicesPre
			 : services.items).map((service, index) => (
				<>
				<Card key={service._id} sx={{ mb: 2 }}>
					<Service service={service}/>
					<Button component={Link} to={`/services/${service._id}`} size="small">
						Learn More
					</Button>
				</Card>		
				
				</>
			))}
		</Container>
	)
}

export default Services
