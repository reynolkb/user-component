import { ThemeProvider } from '@mui/material';
import { theme } from 'components/Theme/Theme';
import { UserCardDetailItem } from '../../components/Users/UserCardDetailItem';

describe('UserContainer.cy.ts', () => {
  it('mounts component and props are read correctly', () => {
    cy.mount(
      <ThemeProvider theme={theme}>
        <UserCardDetailItem
          detailHeaderText={'address'}
          ml={0}
          mb={0}
          street={'1234 Not a Fake Street'}
          city={'Dallas'}
          state={'TX'}
          zip={'75201'}
          phone={'5558675309'}
          createdAt={'1970-01-01T06:01:00.000Z'}
          lastLoggedIn={'1970-01-01T06:02:00.000Z'}
        />
      </ThemeProvider>
    );

    cy.get('.MuiTypography-DetailItem').should('contains.text', '1234 Not a Fake Street, Dallas, TX 75201');
  });
});
