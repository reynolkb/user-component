import { Stack } from '@mui/material';
import { Text } from '../Theme/Theme';
import { formatPhoneNumber } from '../Format/formatPhoneNumber';
import { formatDate } from '../Format/formatDate';

interface UserCardDetailProps {
  detailHeaderText: string;
  ml: number;
  mb: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  createdAt: string;
  lastLoggedIn: string;
}

export const UserCardDetailItem: React.FC<UserCardDetailProps> = ({ ...props }) => {
  return (
    <Stack direction="column" sx={{ ml: props.ml, mb: props.mb }}>
      <Text variant="DetailHeader">{props.detailHeaderText}</Text>
      {props.detailHeaderText.toLowerCase() === 'address' && (
        <Text variant="DetailItem">
          {props.street}, {props.city}, {props.state} {props.zip}
        </Text>
      )}
      {props.detailHeaderText.toLowerCase() === 'phone' && <Text variant="DetailItem">{formatPhoneNumber(props.phone)}</Text>}
      {props.detailHeaderText.toLowerCase() === 'created at' && <Text variant="DetailItem">{formatDate(props.createdAt)}</Text>}
      {props.detailHeaderText.toLowerCase() === 'last logged in' && <Text variant="DetailItem">{formatDate(props.lastLoggedIn)}</Text>}
    </Stack>
  );
};
