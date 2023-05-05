import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import homeImg from '../assets/images/programer.jpg'
import aboutImg from '../assets/images/AboutImg.jpg'

const HeroSection = styled('section')(({ theme }) => ({
	height: '80vh',
	backgroundImage: `url(${homeImg})`,
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: theme.palette.common.white,
	[theme.breakpoints.down('sm')]: {
		height: '35vh',
	},
}))

const ServicesSection = styled('section')(({ theme }) => ({
	padding: '6rem 0',
	backgroundColor: '#ffdf40',
}))

const ServiceCard = styled(Grid)(({ theme }) => ({
	padding: '1rem',
	textAlign: 'center',
	height: '100%',
	backgroundColor: theme.palette.common.white,
	boxShadow: theme.shadows[3],
	borderRadius: theme.shape.borderRadius,
}))

const AboutSection = styled('section')(({ theme }) => ({
	padding: '6rem 0',
	backgroundColor: theme.palette.primary.main,
}))

const TestimonialsSection = styled('section')(({ theme }) => ({
	padding: '6rem 0',
}))

const TestimonialCard = styled(Grid)(({ theme }) => ({
	padding: '2rem',
	textAlign: 'center',
	height: '100%',
	backgroundColor: theme.palette.common.white,
	boxShadow: theme.shadows[3],
	borderRadius: theme.shape.borderRadius,
}))

const CtaSection = styled('section')(({ theme }) => ({
	padding: '6rem 0',
	backgroundColor: theme.palette.secondary.main,
	textAlign: 'center',
}))

const Home = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<HeroSection>
				<Box>
					<Typography variant="h3" gutterBottom>
						Welcome to our website
					</Typography>
					<Typography variant="body1" gutterBottom>
						We provide a range of services to help businesses to grow and
						achieve their goals. Check out our services to see how we can help
						your business.
					</Typography>
					<Button variant="contained" color="primary">
						Learn More
					</Button>
				</Box>
			</HeroSection>
			<ServicesSection>
				<Container>
					<Typography
						variant="h4"
						align="center"
						gutterBottom
						sx={{ color: '#fff' }}
					>
						Our Services
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4}>
							<ServiceCard item>
								<Typography variant="h6" gutterBottom>
									Service 1
								</Typography>
								<Typography variant="body2" gutterBottom>
									Description of Service 1
								</Typography>
							</ServiceCard>
						</Grid>
						<Grid item xs={12} md={4}>
							<ServiceCard item>
								<Typography variant="h6" gutterBottom>
									Service 2
								</Typography>
								<Typography variant="body2" gutterBottom>
									Description of Service 2
								</Typography>
							</ServiceCard>
						</Grid>
						<Grid item xs={12} md={4}>
							<ServiceCard item>
								<Typography variant="h6" gutterBottom>
									Service 3
								</Typography>
								<Typography variant="body2" gutterBottom>
									Description of Service 3
								</Typography>
							</ServiceCard>
						</Grid>
					</Grid>
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<Button variant="contained" color="primary" href="../Services" >
							View All Services
						</Button>
					</Box>
				</Container>
			</ServicesSection>
			<AboutSection>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<Box sx={{ position: 'relative', height: '100%' }}>
								<Box
									sx={{
										position: 'absolute',
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										backgroundImage: `url(${aboutImg})`,
										backgroundSize: 'cover',
									}}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box
								sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
							>
								<Box>
									<Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
										About Us
									</Typography>
									<Typography
										variant="body1"
										gutterBottom
										sx={{ color: '#fff' }}
									>
										We are a team of professionals dedicated to helping
										businesses grow and succeed. Lorem ipsum dolor sit amet,
										consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad
										minim veniam, quis nostrud exercitation ullamco laboris nisi
										ut aliquip ex ea commodo consequat. Duis aute irure dolor in
										reprehenderit in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur.
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</AboutSection>
			<TestimonialsSection>
				<Container>
					<Typography variant="h4" align="center" gutterBottom>
						What Our Clients Say
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4}>
							<TestimonialCard item>
								<Typography variant="h6" gutterBottom>
									Client 1
								</Typography>
								<Typography variant="body2" gutterBottom>
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat."
								</Typography>
							</TestimonialCard>
						</Grid>
						<Grid item xs={12} md={4}>
							<TestimonialCard item>
								<Typography variant="h6" gutterBottom>
									Client 2
								</Typography>
								<Typography variant="body2" gutterBottom>
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat."
								</Typography>
							</TestimonialCard>
						</Grid>
						<Grid item xs={12} md={4}>
							<TestimonialCard item>
								<Typography variant="h6" gutterBottom>
									Client 3
								</Typography>
								<Typography variant="body2" gutterBottom>
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat."
								</Typography>
							</TestimonialCard>
						</Grid>
					</Grid>
				</Container>
			</TestimonialsSection>
			<CtaSection>
				<Container>
					<Typography variant="h4" gutterBottom>
						Get in Touch
					</Typography>
					<Typography variant="body1" gutterBottom>
						Ready to take your business to the next level? Contact us today to
						see how we can help.
					</Typography>
					<Button variant="contained" color="primary">
						Contact Us
					</Button>
				</Container>
			</CtaSection>
		</Box>
	)
}

export default Home