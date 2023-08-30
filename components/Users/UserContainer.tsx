import * as React from 'react';
import { Paper, ThemeProvider } from '@mui/material';
import { UserCard } from './UserCard';
import { theme } from '../Theme/Theme';
import usersData from '../../users.json';
import { UserHeader } from './UserHeader';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LIGHT_GREY } from '../Theme/Colors';

type User = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  createdAt: string;
  lastLoggedIn: string;
};

export const UserContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        sx={{ height: '100%', width: { xs: '300px', sm: '400px' }, background: LIGHT_GREY, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '0px' }}
      >
        <UserHeader header="Users" />
        {isLoading ? <CircularProgress sx={{ margin: '20px auto' }} /> : Array.from(users).map((user, index) => <UserCard key={index} {...user} />)}
      </Paper>
    </ThemeProvider>
  );
};
