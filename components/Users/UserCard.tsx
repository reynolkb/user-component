import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministratorSVG from '../../images/roles/administrator.svg';
import UserSVG from '../../images/roles/user.svg';
import ViewerSVG from '../../images/roles/viewer.svg';
import Image from 'next/image';
import { UserCardDetail } from './UserCardDetail';
import { useState } from 'react';
import { UserCardBody } from './UserCardBody';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface UserCardProps {
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
}

export const UserCard: React.FC<UserCardProps> = ({ ...props }) => {
  const [expanded, setExpanded] = useState(false);
  const [administratorSrc, setAdministratorSrc] = useState(AdministratorSVG);
  const [userSrc, setUserSrc] = useState(UserSVG);
  const [viewerSrc, setViewerSrc] = useState(ViewerSVG);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleError = () => {
    setAdministratorSrc('/images/roles/administrator.svg');
    setUserSrc('/images/roles/user.svg');
    setViewerSrc('/images/roles/viewer.svg');
  };

  const userCardBodyProps = { firstName: props.firstName, lastName: props.lastName, role: props.role, email: props.email };
  const userCardDetailProps = { street: props.street, city: props.city, state: props.state, zip: props.zip, phone: props.phone, createdAt: props.createdAt, lastLoggedIn: props.lastLoggedIn };

  return (
    <Card elevation={3} sx={{ ml: 2, mr: 2, mt: 2, '&:last-child': { mb: 2 }, borderRadius: '3px' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        {props.role === 'Administrator' && <Image src={administratorSrc} alt="administrator" onError={handleError} width={50} height={50} priority />}
        {props.role === 'User' && <Image src={userSrc} alt="user" onError={handleError} width={50} height={50} />}
        {props.role === 'Viewer' && <Image src={viewerSrc} alt="viewer" onError={handleError} width={50} height={50} />}
        <UserCardBody {...userCardBodyProps} />
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <UserCardDetail {...userCardDetailProps} />
      </Collapse>
    </Card>
  );
};
