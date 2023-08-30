import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Stack } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import GroupSVG from '../../images/group.svg';
import Image from 'next/image';
import { Text } from '../Theme/Theme';
import { WHITE } from '../Theme/Colors';
import { useState } from 'react';

interface UserHeaderProps {
  header: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ header }) => {
  const [groupSrc, setGroupSrc] = useState(GroupSVG);
  const handleError = () => {
    setGroupSrc('/images/group.svg');
  };

  return (
    <AppBar position="static" style={{ background: WHITE, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '0px' }}>
      <Toolbar>
        <Stack direction="row" justifyContent="center" alignItems="center">
          {header.toLowerCase() === 'users' && <Image src={groupSrc} alt="group" onError={handleError} width={24} height={24} />}
          <Text variant="NavHeader" sx={{ ml: 1 }}>
            {header}
          </Text>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
