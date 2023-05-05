import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import IconMenu from '@mui/icons-material/IconMenu';

function Header(props) {
	const { isLoggedIn } = props

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					{/* <IconMenu /> */}
				</IconButton>
				<Typography variant="h6">
					<Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
						Your Logo
					</Link>
				</Typography>
				<div style={{ marginLeft: 'auto' }}>
					<Link
						to="/about"
						style={{ marginLeft: 16, textDecoration: 'none', color: 'inherit' }}
					>
						About
					</Link>
					<Link
						to="/services"
						style={{ marginLeft: 16, textDecoration: 'none', color: 'inherit' }}
					>
						Services
					</Link>
					<Link
						to="/projects"
						style={{ marginLeft: 16, textDecoration: 'none', color: 'inherit' }}
					>
						Projects
					</Link>
					<Link
						to="/blog"
						style={{ marginLeft: 16, textDecoration: 'none', color: 'inherit' }}
					>
						Blog
					</Link>
					<Link
						to="/contact"
						style={{ marginLeft: 16, textDecoration: 'none', color: 'inherit' }}
					>
						Contact
					</Link>
					{isLoggedIn ? (
						<Link
							to="/dashboard"
							style={{
								marginLeft: 16,
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							Dashboard
						</Link>
					) : (
						<Button
							variant="contained"
							color="secondary"
							component={Link}
							to="/login"
							style={{ marginLeft: 16 }}
						>
							Login
						</Button>
					)}
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header
