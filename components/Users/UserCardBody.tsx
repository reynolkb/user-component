import * as React from 'react';
import { Stack } from '@mui/material';
import { Text } from '../Theme/Theme';

interface UserCardBodyProps {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
}

export const UserCardBody: React.FC<UserCardBodyProps> = ({ ...props }) => {
  return (
    <Stack direction="column" sx={{ ml: 1, mr: 1 }}>
      <Text variant="UserName">
        {props.firstName} {props.lastName}
      </Text>
      <Text variant="UserRole">{props.role}</Text>
      <Text variant="Email">{props.email}</Text>
    </Stack>
  );
};
