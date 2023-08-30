import { ThemeProvider } from '@mui/material';
import { theme } from 'components/Theme/Theme';
import { UserCardBody } from '../../components/Users/UserCardBody';

describe('UserContainer.cy.ts', () => {
  it('mounts component and props are read correctly', () => {
    cy.mount(
      <ThemeProvider theme={theme}>
        <UserCardBody firstName={'Alexander'} lastName={'the Great'} role={'Administrator'} email={'alexander@conqueror.com'} />
      </ThemeProvider>
    );

    cy.get('.MuiTypography-UserName').should('contains.text', 'Alexander the Great');
    cy.get('.MuiTypography-UserRole').should('contains.text', 'Administrator');
    cy.get('.MuiTypography-Email').should('contains.text', 'alexander@conqueror.com');
  });
});
