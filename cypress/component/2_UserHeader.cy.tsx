import { ThemeProvider } from '@mui/material';
import { theme } from 'components/Theme/Theme';
import { UserHeader } from '../../components/Users/UserHeader';

describe('UserCard.cy.ts', () => {
  it('mounts component and props are read correctly', () => {
    cy.mount(
      <ThemeProvider theme={theme}>
        <UserHeader header={'Users'} />
      </ThemeProvider>
    );

    cy.get('[alt="group"]').should('be.visible');
    cy.get('.MuiTypography-NavHeader').should('contains.text', 'Users');
  });
});
