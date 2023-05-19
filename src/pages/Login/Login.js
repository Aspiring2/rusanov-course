import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { TextField, Button, Typography, Box } from '@mui/material';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    console.log(isAuth);
    if (isAuth) {
      navigate('/');
    } else {
      if (!data.payload) {
        alert('Не удалось авторизоваться');
      }
      if ('token' in data.payload) {
        window.localStorage.setItem('token', data.payload.token);
      }
     
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 10 }}>
      <Typography variant="h4" sx={{ mb: 5 }}>Login</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField label="Email" type='email' error={Boolean(errors.email?.message)} helperText={errors.email?.message} {...register('email', {required: 'Укажите почту'})} variant="outlined"/>
        <TextField label="Password" variant="outlined" type="password" error={Boolean(errors.password?.message)} helperText={errors.password?.message}  {...register('password', {required: 'Введите пароль'})} />
        <Button variant="contained" type="submit">Login</Button>
        <Typography variant="body2">Don't have an account? <Link to="/register">Register here</Link></Typography>
      </Box>
    </Box>
  );
};

export default Login;
