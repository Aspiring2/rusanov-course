import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectIsAuth } from '../redux/slices/auth'

function Header() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout())
      window.localStorage.removeItem('token')
    }
  }

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
          {isAuth ? (
            <React.Fragment>
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
              <Button
                variant="contained"
                color="secondary"
                onClick={onClickLogout}
                style={{ marginLeft: 16 }}
              >
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/auth/login"
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
