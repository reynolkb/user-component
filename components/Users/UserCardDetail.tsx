import CardContent from '@mui/material/CardContent';
import { UserCardDetailItem } from './UserCardDetailItem';

interface UserCardDetailProps {
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  createdAt: string;
  lastLoggedIn: string;
}

export const UserCardDetail: React.FC<UserCardDetailProps> = ({ ...props }) => {
  const userCardDetailItemProps = { street: props.street, city: props.city, state: props.state, zip: props.zip, phone: props.phone, createdAt: props.createdAt, lastLoggedIn: props.lastLoggedIn };

  return (
    <CardContent>
      <UserCardDetailItem detailHeaderText="Address" ml={7} mb={2} {...userCardDetailItemProps} />
      <UserCardDetailItem detailHeaderText="Phone" ml={7} mb={2} {...userCardDetailItemProps} />
      <UserCardDetailItem detailHeaderText="Created At" ml={7} mb={2} {...userCardDetailItemProps} />
      <UserCardDetailItem detailHeaderText="Last Logged In" ml={7} mb={0} {...userCardDetailItemProps} />
    </CardContent>
  );
};
